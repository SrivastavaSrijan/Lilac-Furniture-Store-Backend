import { cloudinaryImage } from '@keystone-6/cloudinary';

import 'dotenv/config';
import { cloudinary } from '../lib/constants';
import { allowAll } from '@keystone-6/core/access';
import { list } from '@keystone-6/core';
import { text, relationship } from '@keystone-6/core/fields';

export const ProductImage = list({
  access: allowAll,
  fields: {
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',
    }),
    alt: text(),
    product: relationship({ ref: 'Product.image' }),
  },
  ui: {
    listView: {
      initialColumns: ['alt', 'image'],
    },
  },
});
