import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship, timestamp, float } from '@keystone-6/core/fields';

export const Review = list({
  access: allowAll,
  ui: { listView: { initialColumns: ['author', 'product', 'rating'] } },
  fields: {
    rating: float({
      validation: { isRequired: true, min: 1, max: 5 },
      isIndexed: true,
    }),
    content: text({
      ui: {
        displayMode: 'textarea',
      },
    }),
    product: relationship({
      ref: 'Product.reviews',
      ui: {
        displayMode: 'cards',
        cardFields: ['name'],
        inlineConnect: { labelField: 'name' },
        inlineEdit: { fields: ['name', 'description'] },
      },
    }),
    author: text({ validation: { isRequired: true } }),
    createdAt: timestamp({
      defaultValue: { kind: 'now' },
      ui: {
        createView: { fieldMode: 'hidden' },
        itemView: { fieldMode: 'read' },
      },
    }),
  },
});
