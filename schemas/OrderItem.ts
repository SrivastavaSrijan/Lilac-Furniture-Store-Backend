import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, integer } from '@keystone-6/core/fields';
import type { Context } from '.keystone/types';
import { createSnapshot, validateRelationships } from '../lib';

export const OrderItem = list({
  access: allowAll,
  ui: { listView: { initialColumns: ['product', 'price', 'quantity'] } },
  fields: {
    price: integer({
      validation: { isRequired: true },
      isOrderable: true,
    }),
    quantity: integer({
      validation: { isRequired: true },
      isOrderable: true,
    }),
    // Relationship to ProductVariant
    variant: relationship({
      ref: 'ProductVariant',
      ui: {
        inlineConnect: true,
        displayMode: 'cards',
        cardFields: ['color', 'material', 'variant', 'size'],
      },
      hooks: {
        validateInput: (options) => {
          return validateRelationships({ hasOne: ['variant'], ...options });
        },
      },
    }),
    snapshot: relationship({
      ui: {
        itemView: { fieldMode: 'read', fieldPosition: 'sidebar' },
      },
      ref: 'ProductSnapshot',
    }),
    order: relationship({ ref: 'Order.items' }),
  },
  hooks: {
    resolveInput: async ({
      context: _context,
      resolvedData: _resolvedData,
      operation,
    }) => {
      const context = _context as Context;
      const resolvedData = _resolvedData;
      const variantId =
        operation === 'create'
          ? resolvedData?.variant?.connect?.id
          : resolvedData?.variant;
      if (!variantId) {
        if (operation === 'update') return resolvedData;
        if (operation === 'create') return null;
      }
      const productSnapshot = await createSnapshot(context, variantId);
      return {
        ...resolvedData,
        ...(productSnapshot && {
          snapshot: { connect: { id: productSnapshot.id } },
        }),
      };
    },
  },
});
