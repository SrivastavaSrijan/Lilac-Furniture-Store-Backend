import { text } from '@keystone-6/core/fields';
import kebabCase from 'lodash.kebabcase';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME ?? '',
  apiKey: process.env.CLOUDINARY_KEY || '',
  apiSecret: process.env.CLOUDINARY_SECRET || '',
  folder: 'sickfits',
};

export const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';
export const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360,
  secret: process.env.COOKIE_SECRET,
};

export const withSlug = {
  // Declare the `slug` as a normal text field
  slug: text({
    // Being a slug, it should be indexed for lookups and unique
    isIndexed: 'unique',
    validation: { isRequired: true },
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
