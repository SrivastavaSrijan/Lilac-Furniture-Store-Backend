import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, integer } from '@keystone-6/core/fields';
import type { Context } from '.keystone/types';
import { validateRelationships } from '../lib';
import { pick } from 'lodash';

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
      let resolvedData = _resolvedData;
      const variantId =
        operation === 'create'
          ? resolvedData?.variant?.connect?.id
          : resolvedData?.variant;
      if (!variantId) {
        if (operation === 'update') return resolvedData;
        if (operation === 'create') return null;
      }
      const variant = await context.prisma.productVariant.findUnique({
        where: { id: variantId },
        include: {
          product: {
            // select: { name: true, type: true, style: true, company: true },
            include: { image: true, category: true },
          },
        },
      });
      if (!variant) return;
      const { id, price, product, productId, ...rest } = variant;
      if (!product || !productId) return;
      const { name, image, slug } = product;
      if (!name || !slug || !price || !id) return;
      const variantString = Object.values(rest).join(', ');
      const meta = {
        variant: variantString,
        ...pick(product, ['company', 'type', 'style']),
      };
      const productSnapshotValue = {
        id,
        price,
        name,
        slug,
        image: (image?.image as { _meta: { url: string } })?._meta?.url ?? null,
        meta,
      };
      // Create snapshots
      const productSnapshot = await context.prisma.productSnapshot.upsert({
        where: { id: productSnapshotValue?.id },
        create: productSnapshotValue,
        update: productSnapshotValue,
      });
      // Attach snapshots to resolvedData
      // ... handle productSnapshot if necessary
      resolvedData = {
        ...resolvedData,
        snapshot: { connect: { id: productSnapshot.id } },
      };
      console.log(
        '🫨 Created/Updated a snapshot of variant ID -',
        id,
        ', product ID -',
        productId,
        'with the following payload - ',
        productSnapshotValue,
      );
      return resolvedData;
    },
  },
});
