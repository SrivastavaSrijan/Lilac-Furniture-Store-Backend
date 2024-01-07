import { graphql, list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
  text,
  select,
  relationship,
  json,
  virtual,
  integer,
} from '@keystone-6/core/fields';
import { withSlug } from '../lib';
import type { Context } from '.keystone/types';
import { updateDefaultProductSchema, validateRelationships } from '../lib';

export const Product = list({
  // TODO: access
  access: allowAll,
  ui: { listView: { initialColumns: ['name', 'category', 'type'] } },
  fields: {
    ...withSlug,
    name: text({
      validation: { isRequired: true },
      isIndexed: true,
      isOrderable: true,
    }),
    shortDescription: virtual({
      field: graphql.field({
        type: graphql.String,
        args: {
          length: graphql.arg({
            type: graphql.nonNull(graphql.Int),
            defaultValue: 50,
          }),
        },
        resolve(item, { length }) {
          const { type, style, company, description } = item;
          let shortDescription = `A ${style} ${type} by ${company}. `;
          if (!description) {
            return null;
          }
          const content = description as string;
          if (content.length <= length) {
            shortDescription = shortDescription.concat(content);
          } else {
            shortDescription = shortDescription.concat(
              content.slice(0, length - 3) + '...',
            );
          }
          return shortDescription;
        },
      }),
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
      defaultValue: 'null',
      ui: {
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'hidden' },
      },
    }),
    lowestPrice: integer({
      validation: { isRequired: true },
      ui: {
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'hidden' },
      },
      isOrderable: true,
      defaultValue: -1,
    }),
    highestPrice: integer({
      validation: { isRequired: true },
      isOrderable: true,
      ui: {
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'hidden' },
      },
      defaultValue: -1,
    }),
    variants: relationship({
      ref: 'ProductVariant.product',
      many: true,
      ui: {
        displayMode: 'select',
        labelField: 'color',
      },
      hooks: {
        validateInput: (options) => {
          return validateRelationships({ hasMany: ['variants'], ...options });
        },
      },
    }),
    type: text(),
    style: text(),
    company: text(),
    image: relationship({
      ref: 'ProductImage.product',
      ui: {
        displayMode: 'cards',
        cardFields: ['image'],
        inlineCreate: { fields: ['image'] },
      },
    }),
    category: relationship({
      ref: 'Category.products',
      many: false,
      ui: {
        displayMode: 'cards',
        inlineConnect: { labelField: 'name', searchFields: ['name'] },
        cardFields: ['name'],
        inlineCreate: { fields: ['name', 'description'] },
      },
    }),
    meta: json({ defaultValue: {} }),
    reviews: relationship({
      ref: 'Review.product',
      many: true,
      ui: {
        displayMode: 'count',
        itemView: { fieldPosition: 'sidebar' },
      },
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
  },
  hooks: {
    afterOperation: async ({ context: _context, item }) => {
      const context = _context as Context;
      const id = item?.id?.toString();
      if (id) await updateDefaultProductSchema(context.prisma, id);
    },
  },
});
