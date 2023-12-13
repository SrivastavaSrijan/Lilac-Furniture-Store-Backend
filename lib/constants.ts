import { text } from '@keystone-6/core/fields';
import { kebabCase } from 'lodash';
import Stripe from 'stripe';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME ?? '',
  apiKey: process.env.CLOUDINARY_KEY || '',
  apiSecret: process.env.CLOUDINARY_SECRET || '',
  folder: 'sickfits',
};

export const databaseURL = process.env.DATABASE_URL || '';
export const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

export const withSlug = {
  // Declare the `slug` as a normal text field
  slug: text({
    // Being a slug, it should be indexed for lookups and unique
    isIndexed: 'unique',
    defaultValue: 'EMPTY',
    validation: { isRequired: true },
    ui: {
      createView: { fieldMode: 'hidden' },
      itemView: { fieldMode: 'hidden' },
    },
    // Define the hook function itself and attach it to the resolveInput
    // step of the mutation lifecycle
    hooks: {
      resolveInput: ({ operation, resolvedData, inputData }) => {
        // Lets only default the slug value on create and only if
        // it isn't supplied by the caller.
        // We probably don't want slugs to change automatically if an
        // item is renamed.
        if (operation === 'create' && !inputData.slug) {
          return kebabCase(inputData.name);
        }
        // Since this hook is a the field level we only return the
        // value for this field, not the whole item
        return resolvedData.slug;
      },
    },
  }),
};

export const stripe = new Stripe(process.env.STRIPE_SECRET ?? '', {
  apiVersion: '2023-10-16',
});
