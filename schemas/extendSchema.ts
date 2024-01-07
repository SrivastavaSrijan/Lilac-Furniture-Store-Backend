import { mergeSchemas } from '@graphql-tools/schema';
import { GraphQLSchema } from 'graphql';
import type { Context } from '.keystone/types';
import {
  ConfirmPaymentAndCreateOrderResult,
  MinMax,
  PaymentIntentStatus,
  calculateDiscount,
  createSnapshot,
  stripe,
  validateCoupon,
} from '../lib';
import { getUserDetails } from '../lib';
import gql from 'graphql-tag';
import fs from 'fs';
import path from 'path';
import { CreatePaymentIntentResult } from '../lib';
import { Prisma } from '@prisma/client';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
dayjs.extend(isBetween);

const typeDefs = gql(
  fs.readFileSync(path.join(__dirname, '../lib/types.graphql'), 'utf-8'),
);

export function extendGraphqlSchema(baseSchema: GraphQLSchema) {
  return mergeSchemas({
    schemas: [baseSchema],
    typeDefs,
    resolvers: {
      Mutation: {
        validateCoupon: async (
          _source,
          { couponCode }: { couponCode: string; cartId: string },
          context: Context,
        ): Promise<{ isValid: boolean; amount: number }> => {
          // Initialize the response
          const { amount } = await getUserDetails(context);
          let response = {
            isValid: false,
            amount,
            discountedAmount: amount,
          };
          // Find the coupon using the provided coupon code
          const coupon = await context.prisma.coupon.findUnique({
            where: { code: couponCode },
          });
          const isValid = validateCoupon(coupon);
          if (!isValid) return response;
          // Apply the coupon discount
          const discount = calculateDiscount(amount, coupon);
          const finalAmount = amount - discount;
          response = {
            isValid: true,
            amount,
            discountedAmount: finalAmount,
          };
          // Return the new amount after applying the coupon
          return response;
        },
        createPaymentIntent: async (
          _source,
          { couponCode },
          context: Context,
        ): Promise<CreatePaymentIntentResult> => {
          // Create a Stripe Customer
          const { amount, customer } = await getUserDetails(context);
          let discount = 0;
          let coupon = null;

          if (couponCode) {
            coupon = await context.prisma.coupon.findUnique({
              where: { code: couponCode },
              rejectOnNotFound: false,
            });

            // Check if coupon is valid
            if (!validateCoupon(coupon)) {
              throw new Error('Invalid or expired coupon code');
            }

            // Apply the discount
            discount = calculateDiscount(amount, coupon);
          }
          // Create a charge

          let response: CreatePaymentIntentResult = {
            status: PaymentIntentStatus.Canceled,
            id: null,
          };
          const charge = await stripe.paymentIntents
            .create({
              amount: amount - discount,
              currency: 'INR',
              customer: customer.id,
            })
            .catch((error) => {
              console.log(error.message);
              throw new Error(error.message);
            });
          if (charge && charge.id) {
            const { id, client_secret, status } = charge;
            if (!id || !client_secret || !status)
              return {
                status: PaymentIntentStatus.Canceled,
                client_secret: null,
                id: null,
              };
            response = {
              status: PaymentIntentStatus.Succeeded,
              id,
              client_secret,
            };
          }
          return response;
        },
        confirmPaymentAndCreateOrder: async (
          _source,
          { paymentIntentId, couponCode },
          context: Context,
        ): Promise<ConfirmPaymentAndCreateOrderResult> => {
          const {
            id: userId,
            cart,
            amount: cartAmount,
          } = await getUserDetails(context);
          const couponData = await context.prisma.coupon.findUnique({
            where: { code: couponCode },
          });
          // Calculate the discount and the final amount after discount
          const discount = couponData
            ? calculateDiscount(cartAmount, couponData)
            : 0;
          const finalAmount = cartAmount - discount;
          const { status, amount, id, client_secret } =
            await stripe.paymentIntents.retrieve(paymentIntentId);
          // Payment has been cancelled, abort!
          if (status !== 'succeeded' || amount !== finalAmount) {
            return {
              status: PaymentIntentStatus.Canceled,
            };
          }
          // Payment is received, create an order by creating order items and subsequent  ProductSnapshot
          const orderItems: Prisma.OrderItemCreateManyInput[] = [];
          for await (const { variant, quantity } of cart) {
            if (variant && quantity) {
              const { price, id: variantId } = variant;
              const productSnapshot = await createSnapshot(context, variantId);
              const orderItem = {
                price,
                quantity,
                variantId,
                snapshotId: productSnapshot?.id ?? '',
              };
              orderItems.push(orderItem);
            }
          }
          const order = await context.prisma.order.create({
            data: {
              total: finalAmount,
              coupon: couponCode,
              charge: id,
              createdAt: dayjs().toISOString(),
              items: {
                createMany: {
                  data: orderItems,
                },
              },
              user: {
                connect: { id: userId },
              },
            },
          });
          for await (const { id } of cart) {
            await context.prisma.cartItem.delete({ where: { id } });
          }

          if (couponCode && couponData?.usageLimit) {
            await context.prisma.coupon.update({
              where: { code: couponCode },
              data: { usageLimit: (couponData?.usageLimit ?? -1) - 1 },
            });
          }
          // Clear the cart
          return {
            status: PaymentIntentStatus.Succeeded,
            client_secret,
            id,
            order,
          };
        },
        addToCart: async (_source, { id }, context: Context) => {
          const { session } = context;
          if (!session?.itemId)
            throw new Error('Unauthenticated Error', { cause: 403 });
          const allCartItems = await context.prisma.cartItem.findMany({
            where: {
              user: { id: { equals: session.itemId } },
              variant: {
                product: { id: { equals: id } },
              },
            },
          });
          const [existingProduct] = allCartItems;
          if (existingProduct) {
            return context.prisma.cartItem.update({
              where: {
                id: existingProduct.id,
              },
              data: { quantity: existingProduct.quantity + 1 },
            });
          }
          return await context.prisma.cartItem.create({
            data: {
              variant: { connect: { id } },
              user: { connect: { id: session.itemId } },
            },
          });
        },
      },
      Query: {
        getAllProductDescriptors: async (
          _,
          { where, take, skip },
          context: Context,
        ): Promise<{
          styles: string[];
          types: string[];
          companies: string[];
        }> => {
          const styles = context.prisma.product
            .groupBy({
              by: ['style'],
              where,
              take,
              skip,
              orderBy: { style: 'asc' },
            })
            .then((res) => res.map((val) => val.style).filter(Boolean));
          const companies = context.prisma.product
            .groupBy({
              by: ['company'],
              where,
              take,
              skip: skip * 9,
              orderBy: { company: 'asc' },
            })
            .then((res) => res.map((val) => val.company).filter(Boolean));
          const types = context.prisma.product
            .groupBy({
              by: ['type'],
              where,
              take,
              skip,
              orderBy: { type: 'asc' },
            })
            .then((res) => res.map((val) => val.type).filter(Boolean));
          const [allStyles, allTypes, allCompanies] = await Promise.all([
            styles,
            types,
            companies,
          ]);
          return {
            styles: allStyles,
            types: allTypes,
            companies: allCompanies,
          };
        },
        getPriceRange: async (
          _,
          { where },
          context: Context,
        ): Promise<MinMax> => {
          // Use Prisma's aggregation capabilities to get the min and max price from ProductVariant
          const priceAggregate = await context.prisma.product.aggregate({
            where,
            _min: {
              lowestPrice: true,
            },
            _max: {
              lowestPrice: true,
            },
          });

          const min = priceAggregate._min.lowestPrice;
          const max = priceAggregate._max.lowestPrice;
          if (min === null || max === null) {
            throw new Error('Cannot aggregate a minimum/maximum price');
          }

          return {
            min,
            max,
          };
        },
      },
    },
  });
}
