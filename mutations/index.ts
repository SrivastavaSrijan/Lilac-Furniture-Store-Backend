import { graphql } from '@keystone-6/core';
import type { Context } from '.keystone/types';

export const extendGraphqlSchema = graphql.extend((base) => {
  return {
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
