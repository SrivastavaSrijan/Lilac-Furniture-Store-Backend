import { cloudinaryImage } from '@keystone-6/cloudinary';

import { cloudinary } from '../lib/constants';
import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship } from '@keystone-6/core/fields';

export const Category = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({
      validation: { isRequired: true },
      ui: { displayMode: 'textarea' },
    }),
    image: cloudinaryImage({ cloudinary, label: 'Source' }),
    products: relationship({
      ref: 'Product.category',
      many: true,
      ui: {
        displayMode: 'cards',
        cardFields: ['name'],
      },
    }),
  },
});
