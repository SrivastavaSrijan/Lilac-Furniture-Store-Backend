import { mergeSchemas } from '@graphql-tools/schema';
import { GraphQLSchema } from 'graphql';
import type { Context } from '.keystone/types';
import { stripe } from '../lib/constants';
// import { CreatePaymentIntent } from '../lib/types';
// ${CreatePaymentIntent}
const typeDefs = `
""" Min/Max Price """
type MinMax {
  min: Float
  max: Float
}

type Query {
  """ Get price range over a ProductVariant """
  getPriceRange(where: ProductWhereInput): MinMax
}
type Mutation {
  """ Add an item to a cart, remove if quantity = 0 """
  addToCart(id: ID!): CartItem
}

type Mutation {
  """ Create an order with a token """
  createPaymentIntent: JSON
}
`;
export function extendGraphqlSchema(baseSchema: GraphQLSchema) {
  return mergeSchemas({
    schemas: [baseSchema],
    typeDefs,
    resolvers: {
      Mutation: {
        createPaymentIntent: async (_, __, context: Context) => {
          const { session } = context;
          if (!session?.itemId)
            throw new Error('Unauthenticated Error', { cause: 403 });
          const res = await context.prisma.user.findUnique({
            where: { id: session?.itemId },
            include: {
              cart: {
                include: {
                  variant: true,
                },
              },
            },
          });
          if (!res)
            throw new Error('Cannot find `Cart` for user ' + session?.itemId, {
              cause: 500,
            });
          const amount = res.cart?.reduce(
            (p, c) => p + (c?.variant?.price ?? 0 * c.quantity ?? 0),
            0,
          );
          const charge = await stripe.paymentIntents
            .create({
              amount,
              currency: 'INR',
            })
            .catch((error) => {
              console.log(error.message);
              throw new Error(error.message);
            });
          return charge;
        },
        addToCart: async (_, { id }, context: Context) => {
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
        getPriceRange: async (_, { where }, context: Context) => {
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
