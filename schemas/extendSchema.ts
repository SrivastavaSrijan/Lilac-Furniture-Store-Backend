import { mergeSchemas } from '@graphql-tools/schema';
import { GraphQLSchema } from 'graphql';
import type { Context } from '.keystone/types';
import {
  ConfirmPaymentAndCreateOrderResult,
  MinMax,
  PaymentIntentStatus,
  stripe,
} from '../lib';
import { getUserDetails } from '../lib';
import gql from 'graphql-tag';
import fs from 'fs';
import path from 'path';
import { CreatePaymentIntentResult } from '../lib';
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
          if (status !== 'succeeded' || amount !== cartAmount) {
            return {
              status: PaymentIntentStatus.Canceled,
            };
          }
          const orderItems = cart
            .map(({ variant, quantity }) => {
              if (!variant) return null;
              const { price, id: variantId } = variant;
              const orderItem = {
                price,
                quantity,
                variantId,
              };
              return orderItem;
            })
            .filter((item): item is NonNullable<typeof item> => item !== null)
            .map((item) => item!); // Non-null assertion here

          const order = await context.prisma.order.create({
            data: {
              total: amount,
              charge: id,
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
        getPriceRange: async (
          _,
          { where },
          context: Context,
        ): Promise<MinMax> => {
          // Use Prisma's aggregation capabilities to get the min and max price from ProductVariant
          const priceAggregate = await context.prisma.productVariant.aggregate({
            where: { product: where },
            _min: {
              price: true,
            },
            _max: {
              price: true,
            },
          });

          const min = priceAggregate._min.price;
          const max = priceAggregate._max.price;
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
