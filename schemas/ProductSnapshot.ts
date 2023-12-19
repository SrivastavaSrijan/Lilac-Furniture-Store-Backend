import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, json, integer } from '@keystone-6/core/fields';

export const ProductSnapshot = list({
  access: allowAll,
  ui: { listView: { initialColumns: ['name', 'price'] } },
  fields: {
    price: integer({
      validation: { isRequired: true },
      isOrderable: true,
    }),
    image: text(),
    name: text({ validation: { isRequired: true } }),
    meta: json({ defaultValue: {} }),
  },
});
