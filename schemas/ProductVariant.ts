import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { text, relationship, integer } from '@keystone-6/core/fields';
import type { Context } from '.keystone/types';
import { ProductVariant as ProductVariantType } from '@prisma/client';
import { validateRelationships } from '../lib';

export const ProductVariant = list({
  access: allowAll,
  ui: { listView: { initialColumns: ['color', 'material', 'size', 'price'] } },
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
      ui: {
        displayMode: 'cards',
        cardFields: ['id', 'name', 'style'],
        inlineConnect: true,
        linkToItem: true,
      },
      many: false, // Each variant belongs to one product
      hooks: {
        validateInput: (options) => {
          return validateRelationships({ hasOne: ['product'], ...options });
        },
      },
    }),
  },
  hooks: {
    afterOperation: async ({ context: _context, originalItem }) => {
      const context = _context as Context;
      const resolvedData = originalItem as ProductVariantType;
      // Fetch all variants of the product
      const productId = resolvedData?.productId;
      if (!productId) return;
      const variants = await context.db.ProductVariant.findMany({
        where: { product: { id: { equals: productId } } },
      });

      // Calculate the highest and lowest prices
      let highestPrice = 0;
      let lowestPrice = Number.MAX_SAFE_INTEGER;
      variants.forEach((variant) => {
        if (variant.price > highestPrice) highestPrice = variant.price;
        if (variant.price < lowestPrice) lowestPrice = variant.price;
      });

      // Update the product with the new price range
      await context.db.Product.updateOne({
        where: { id: productId },
        data: {
          highestPrice,
          lowestPrice,
        },
      });
      console.log(
        '✨ Updated product min & max - ',
        lowestPrice,
        highestPrice,
        productId,
      );
      // Call a function to update the product's price range
    },
  },
});
