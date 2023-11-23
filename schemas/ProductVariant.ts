import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship, integer } from '@keystone-6/core/fields';

export const ProductVariant = list({
  access: allowAll,
  fields: {
    price: integer({
      validation: { isRequired: true },
      isOrderable: true,
    }),
    color: text({
      validation: { isRequired: true },
    }),
    material: text({
      validation: { isRequired: true },
    }),
    variant: text({
      validation: { isRequired: true },
    }),
    size: text(),
    // Relationship to Product
    product: relationship({
      ref: 'Product.variants',
      many: false, // Each variant belongs to one product
    }),
  },
});
