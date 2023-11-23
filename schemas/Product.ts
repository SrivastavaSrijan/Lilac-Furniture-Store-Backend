import { graphql, list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
  text,
  select,
  relationship,
  json,
  virtual,
} from '@keystone-6/core/fields';
import { withSlug } from '../lib/constants';

export const Product = list({
  // TODO: access
  access: allowAll,
  ui: { listView: { initialColumns: ['name', 'category'] } },
  fields: {
    ...withSlug,
    name: text({
      validation: { isRequired: true },
      isIndexed: true,
      isOrderable: true,
    }),
    description: text({ ui: { displayMode: 'textarea' } }),
    status: select({
      options: [
        { label: 'Draft', value: 'DRAFT' },
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Unavailable', value: 'UNAVAILABLE' },
      ],
      defaultValue: 'DRAFT',
      ui: {
        displayMode: 'segmented-control',
        createView: { fieldMode: 'hidden' },
      },
    }),
    defaultVariantId: text({
      validation: { isRequired: true },
    }),
    variant: virtual({
      field: (lists) =>
        graphql.field({
          type: lists.ProductVariant.types.output,
          args: {
            skuId: graphql.arg({ type: graphql.String, defaultValue: null }),
          },
          async resolve(item, { skuId }, context) {
            if (skuId) {
              // Logic to fetch details of the variant with the provided SKU
              return await context.db.ProductVariant.findOne({
                where: { id: skuId },
              });
            } else {
              // Logic to fetch default variant details
              // Modify this based on how your default variant is determined
              if (item.defaultVariantId) {
                return await context.db.ProductVariant.findOne({
                  where: { id: item.defaultVariantId as string },
                });
              }
              const variants = await context.db.ProductVariant.findMany({
                where: {
                  product: { id: { equals: item.id } },
                  /* criteria to find default variant */
                },
                take: 1,
              });
              return variants.length > 0 ? variants[0] : null;
            }
          },
        }),
      ui: {
        query: '{ id price color material }', // Adjust fields according to your ProductVariant schema
        listView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'hidden' },
      },
    }),
    variants: relationship({
      ref: 'ProductVariant.product',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['id', 'price', 'color', 'material'],
        inlineConnect: true,
      },
    }),
    // .
    type: text(),
    style: text(),
    company: text(),
    image: relationship({
      ref: 'ProductImage.product',
      ui: {
        displayMode: 'cards',
        cardFields: ['image', 'alt'],
        inlineCreate: { fields: ['image'] },
      },
    }),
    category: relationship({
      ref: 'Category.products',
      many: false,
      ui: {
        displayMode: 'cards',
        cardFields: ['name'],
        inlineCreate: { fields: ['name', 'description'] },
      },
    }),
    meta: json({ defaultValue: {} }),
  },
});
