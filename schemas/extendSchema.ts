import { mergeSchemas } from '@graphql-tools/schema';
import { GraphQLSchema } from 'graphql';
import type { Context } from '.keystone/types';
import {
  ConfirmPaymentAndCreateOrderResult,
  MinMax,
  PaymentIntentStatus,
  createSnapshot,
  stripe,
} from '../lib';
import { getUserDetails } from '../lib';
import gql from 'graphql-tag';
import fs from 'fs';
import path from 'path';
import { CreatePaymentIntentResult } from '../lib';
import { Prisma } from '@prisma/client';
const typeDefs = gql(
  fs.readFileSync(path.join(__dirname, '../lib/types.graphql'), 'utf-8'),
);

export function extendGraphqlSchema(baseSchema: GraphQLSchema) {
  return mergeSchemas({
    schemas: [baseSchema],
    typeDefs,
    resolvers: {
      Mutation: {
        createPaymentIntent: async (
          _source,
          __,
          context: Context,
        ): Promise<CreatePaymentIntentResult> => {
          // Create a Stripe Customer
          const { amount, customer } = await getUserDetails(context);
          // Create a charge
          let response: CreatePaymentIntentResult = {
            status: PaymentIntentStatus.Canceled,
            id: null,
          };
          const charge = await stripe.paymentIntents
            .create({
              amount,
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
          { paymentIntentId },
          context: Context,
        ): Promise<ConfirmPaymentAndCreateOrderResult> => {
          const {
            id: userId,
            cart,
            amount: cartAmount,
          } = await getUserDetails(context);
          const { status, amount, id, client_secret } =
            await stripe.paymentIntents.retrieve(paymentIntentId);
          // Payment has been cancelled, abort,
          if (status !== 'succeeded' || amount !== cartAmount) {
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
              total: amount,
              charge: id,
              createdAt: new Date().toISOString(),
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
            companies,
            types,
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
