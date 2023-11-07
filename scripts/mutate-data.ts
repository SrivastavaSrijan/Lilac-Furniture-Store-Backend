import { PrismaClient } from '.prisma/client';
import { faker } from '@faker-js/faker';

export async function mutateData(prisma: PrismaClient) {
  // Find products and round their prices
  const products = await prisma.product.findMany({});
  const houseRooms = [
    'Living Room',
    'Bedroom',
    'Dining Room',
    'Kitchen',
    'Bathroom',
    'Home Office',
    'Library',
    'Playroom',
    'Mudroom',
    'Laundry Room',
    'Garage',
    'Attic',
    'Basement',
    'Pantry',
    'Sunroom',
    'Home Gym',
    'Guest Room',
    'Study',
  ];
  let lastIteration = 0;

  for (const key of houseRooms) {
    const randomNumber = faker.number.int({ min: 6, max: 18 });

    // Create an array of unique product IDs to connect to the category
    const productIds = products
      .slice(lastIteration, lastIteration + randomNumber)
      .map(({ id }) => id);

    await prisma.category.create({
      data: {
        name: key,
        description: faker.lorem.sentences({ min: 2, max: 3 }),
        products: {
          connect: productIds.map((productId) => ({ id: productId })),
        },
      },
    });

    lastIteration += randomNumber;
  }

  process.exit();
  // Close the connection
}
