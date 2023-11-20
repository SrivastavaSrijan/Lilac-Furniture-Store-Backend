import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
  text,
  select,
  integer,
  relationship,
  json,
} from '@keystone-6/core/fields';
import { withSlug } from '../lib/constants';

export const Product = list({
  // TODO: access
  access: allowAll,
  fields: {
    ...withSlug,
    name: text({ validation: { isRequired: true } }),
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
    price: integer(),
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
