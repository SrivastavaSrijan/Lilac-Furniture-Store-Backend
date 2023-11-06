/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { PrismaClient } from '.prisma/client';

export async function mutateData(prisma: PrismaClient) {
  // Find products and round their prices
  const products = await prisma.product.findMany({});

  for (const product of products) {
    if (!product?.price) return;
    // Round the price to the nearest hundred
    const roundedPrice = Math.round(product?.price / 100) * 100;

    // Update the product price
    await prisma.product.update({
      where: { id: product.id },
      data: {
        ...product,
        price: roundedPrice,
        meta: product?.meta ? product.meta : {},
      },
    });
  }
  process.exit();
  // Close the connectio
}
