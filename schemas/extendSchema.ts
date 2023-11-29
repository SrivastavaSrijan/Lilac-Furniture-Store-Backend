import { mergeSchemas } from '@graphql-tools/schema';
import { GraphQLSchema } from 'graphql';
import type { Context } from '.keystone/types';

export function extendGraphqlSchema(baseSchema: GraphQLSchema) {
  return mergeSchemas({
    schemas: [baseSchema],
    typeDefs: `
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
    `,
    resolvers: {
      Mutation: {
        addToCart: async (source, { id }, context: Context) => {
          const { session } = context;
          if (!session.itemId)
            throw new Error('Unauthenticated Error', { cause: 500 });
          const allCartItems = await context.db.CartItem.findMany({
            where: {
              user: { id: { equals: session.itemId } },
              variant: {
                product: { id: { equals: id } },
              },
            },
          });
          const [existingProduct] = allCartItems;
          if (existingProduct) {
            return context.db.CartItem.updateOne({
              where: {
                id: existingProduct.id,
              },
              data: { quantity: existingProduct.quantity + 1 },
            });
          }
          return await context.db.CartItem.createOne({
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
