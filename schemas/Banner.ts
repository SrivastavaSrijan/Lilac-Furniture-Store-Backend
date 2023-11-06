import { cloudinaryImage } from '@keystone-6/cloudinary';
import { cloudinary } from '../lib/constants';
import { allowAll } from '@keystone-6/core/access';
import { list } from '@keystone-6/core';
import { text } from '@keystone-6/core/fields';

export const Banner = list({
  access: allowAll,
  fields: {
    head:  text({ validation: { isRequired: true } }),
    title:  text({ validation: { isRequired: true } }),
    subtitle:  text({ validation: { isRequired: true } }),
    href:  text({ validation: { isRequired: true } }),
    image: cloudinaryImage({
      cloudinary,
      label: 'Source',
    }),
  },
});
