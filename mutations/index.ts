import { graphql } from '@keystone-6/core';
import type { Context } from '.keystone/types';

export const extendGraphqlSchema = graphql.extend((base) => {
  return {
    query: {
      // Define a new query in your GraphQL API for getting price range
      getPriceRange: graphql.field({
        type: graphql.object<{ min: number; max: number }>()({
          name: 'PriceRange',
          fields: {
            min: graphql.field({ type: graphql.Float }),
            max: graphql.field({ type: graphql.Float }),
          },
        }),
        async resolve(_, __, context: Context) {
          // Use Prisma's aggregation capabilities to get the min and max price
          const priceAggregate = await context.prisma.product.aggregate({
            _min: {
              price: true,
            },
            _max: {
              price: true,
            },
          });
          const min = priceAggregate._min.price;
          const max = priceAggregate._max.price;
          if (!min || !max)
            throw new Error('Cannot aggregate a minimum/maximum price');

          return {
            min,
            max,
          };
        },
        // Return the price range
      }),
    },
    mutation: {
      addToCart: graphql.field({
        type: base.object('CartItem'),
        args: { id: graphql.arg({ type: graphql.nonNull(graphql.ID) }) },
        async resolve(source, { id }, context: Context) {
          const { session } = context;
          if (!session.itemId)
            throw new Error('Unauthenticated Error', { cause: 500 });
          const allCartItems = await context.db.CartItem.findMany({
            where: {
              user: { id: { equals: session.itemId } },
              product: { id: { equals: id } },
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
              product: { connect: { id } },
              user: { connect: { id: session.itemId } },
            },
          });
        },
      }),
    },
  };
});
