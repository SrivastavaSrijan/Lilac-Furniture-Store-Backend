import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import 'dotenv/config';
import { PrismaClient } from '.prisma/client';
import { nanoid } from 'nanoid';
import { faker } from '@faker-js/faker';
import { startCase, mapValues } from 'lodash';
import * as fs from 'fs';
import * as path from 'path';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const seedProducts = async (prisma: PrismaClient) => {
  const imageDirectory = path.join(
    __dirname,
    '..',
    'public',
    'assets',
    'images',
  );
  // Function to read image filenames from /assets/images directory
  const productsDirectory = imageDirectory + '/products';
  let productImageFiles: string[] = [];
  try {
    productImageFiles = fs.readdirSync(productsDirectory);
  } catch (error) {
    console.error(error);
  }

  // Function to generate a random price between 5499 and 350000 in paisa
  const generateRandomPrice = () => {
    // Define a range of prices (in INR) for furniture
    const minLakhs = 1; // Minimum lakhs (e.g., 1 lakh)
    const maxLakhs = 100; // Maximum lakhs (e.g., 100 lakhs)

    // Generate a random number of lakhs within the specified range
    const randomLakhs =
      Math.floor(Math.random() * (maxLakhs - minLakhs + 1)) + minLakhs;

    // Generate a random number of thousands (multiples of 10,000)
    const randomThousands = Math.floor(Math.random() * 10) * 10000;

    // Calculate the final price
    const price = randomLakhs * 100000 + randomThousands;

    // Return the generated price
    return price;
  };
  // Function to generate a random furniture-related name using faker multiple times
  // Array of furniture types for name generation
  const furnitureTypes: string[] = [
    'Table',
    'Chair',
    'Sofa',
    'Cabinet',
    'Desk',
    'Bed',
    'Shelf',
    'Dresser',
    'Couch',
    'Wardrobe',
    'Ottoman',
    'Bookshelf',
    'Coffee Table',
    'Dining Table',
    'Nightstand',
    'Bench',
    'Console Table',
    'End Table',
    'Sideboard',
    'Vanity Table',
    'Rocking Chair',
    'Chaise Lounge',
    'Sectional Sofa',
    'Accent Chair',
    'Folding Table',
  ];

  const styleAdjectives: string[] = [
    'Vintage',
    'Modern',
    'Rustic',
    'Contemporary',
    'Traditional',
    'Industrial',
    'Minimalist',
    'Scandinavian',
    'Bohemian',
    'Coastal',
    'Farmhouse',
    'Mid-Century',
    'Art Deco',
    'Japanese',
    'Mediterranean',
    'Tropical',
    'Transitional',
    'Shabby Chic',
    'Victorian',
    'Gothic',
    'Eclectic',
    'Colonial',
    'Southwestern',
    'Nautical',
    'Cottage',
  ];

  const generateMetadata = () => {
    const parts = mapValues(
      {
        style:
          styleAdjectives[
            faker.number.int({ min: 0, max: styleAdjectives.length - 1 })
          ],
        type: furnitureTypes[
          faker.number.int({ min: 0, max: furnitureTypes.length - 1 })
        ],
        color: faker.color.human(),
        variant: faker.company.catchPhraseAdjective(),
        material: faker.commerce.productMaterial(),
      },
      startCase,
    );
    return parts;
  };

  // Function to generate a random product entry with highly random names
  const generateRandomProduct = () => {
    const productDescription = faker.lorem.paragraphs(
      faker.number.int({ min: 5, max: 10 }),
    );
    const productPricePaisa = generateRandomPrice();

    // Pick the next image filename, ensuring there's an image available
    const productPhoto =
      productImageFiles.length > 0 ? productImageFiles.shift() : null;

    return {
      name: startCase(faker.person.lastName()),
      description: productDescription,
      status: 'AVAILABLE',
      price: productPricePaisa,
      image: productPhoto || '',
      meta: generateMetadata(),
    };
  };

  // Generate 100 random product entries
  const products = Array.from(
    { length: productImageFiles.length },
    generateRandomProduct,
  );
  fs.writeFileSync(
    './scripts/products.json',
    JSON.stringify(products, null, 2),
  );

  for (const product of products) {
    console.log(`👙 Inserting Product Data: ${product.name} Products`);
    try {
      const imageUploaded = await uploadAndReturn(
        prisma,
        product.image,
        productsDirectory,
        product.name,
        true,
      );
      // Now create a new Product and link it to the image
      const { id: pid } = await prisma.product.create({
        data: {
          name: product.name,
          description: product.description,
          status: 'AVAILABLE', // or whatever status you want to set
          price: product.price,
          image: { connect: { id: imageUploaded.id } },
          meta: product.meta,
        },
      });
      console.log(`✨ Product created: ${pid}`);
    } catch (error) {
      console.error(error);
    }
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const seedBanners = async (prisma: PrismaClient) => {
  const imageDirectory = path.join(
    __dirname,
    '..',
    'public',
    'assets',
    'images',
  );
  // Function to read image filenames from /assets/images directory
  const bannerDirectory = imageDirectory + '/banners';
  let bannerImageFiles: string[] = [];
  try {
    bannerImageFiles = fs.readdirSync(bannerDirectory);
  } catch (error) {
    console.error(error);
  }
  // Function to generate a random product entry with highly random names
  const generateRandomBanner = () => {
    // Pick the next image filename, ensuring there's an image available
    const bannerPhoto =
      bannerImageFiles.length > 0 ? bannerImageFiles.shift() : null;

    return {
      ...mapValues(
        {
          title: faker.company.catchPhrase(),
          subtitle: faker.lorem.sentences(faker.number.int({ min: 1, max: 2 })),
          head: faker.company.catchPhraseAdjective(),
        },
        startCase,
      ),
      image: bannerPhoto,
    };
  };

  // Generate 100 random product entries
  const banners = Array.from(
    { length: bannerImageFiles.length },
    generateRandomBanner,
  );
  fs.writeFileSync('./scripts/banners.json', JSON.stringify(banners, null, 2));

  for (const banner of banners) {
    console.log(`👙 Inserting Product Data: ${banner.title}`);
    const image = banner?.image
      ? await uploadAndReturn(
          prisma,
          banner?.image,
          bannerDirectory,
          banner.subtitle,
        )
      : null;
    await prisma.banner.create({
      data: {
        ...banner,
        image: { ...(image && { image: image }) },
      },
    });
  }
};

// Configure your cloudinary instance
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// This is a utility function to upload images to Cloudinary
async function uploadImage(imagePath: string): Promise<UploadApiResponse> {
  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: imagePath.split('/backend-new')[1], // customize this
    });
    return result;
  } catch (error) {
    console.error('Error uploading to Cloudinary', error);
    throw new Error('Failed to upload image.');
  }
}
//     // Upload the image and get the metadata
const uploadAndReturn = async (
  prisma: PrismaClient,
  imageName: string,
  imagePath: string,
  alt: string,
  shouldAttach = false,
) => {
  const uploadResult = await uploadImage(`${imagePath}/${imageName}`);
  const image = {
    id: nanoid(), // This will generate a new ObjectId
    filename: alt,
    originalFilename: uploadResult.original_filename,
    mimetype: 'image/jpeg',
    encoding: '7bit',
    _meta: {
      // This would be the metadata returned from Cloudinary after upload
      asset_id: uploadResult.asset_id,
      public_id: uploadResult.public_id,
      version: uploadResult.version,
      version_id: uploadResult.version_id,
      signature: uploadResult.signature,
      width: uploadResult.width,
      height: uploadResult.height,
      format: uploadResult.format,
      resource_type: uploadResult.resource_type,
      created_at: uploadResult.created_at,
      tags: uploadResult.tags,
      bytes: uploadResult.bytes,
      type: uploadResult.type,
      etag: uploadResult.etag,
      placeholder: uploadResult.placeholder,
      url: uploadResult.url,
      secure_url: uploadResult.secure_url,
      folder: uploadResult.folder,
      original_filename: uploadResult.original_filename,
      api_key: process.env.CLOUDINARY_KEY,
    },
    alt: 'Random Furniture Piece',
  };
  if (shouldAttach) {
    // Create a new ProductImage with the metadata
    const imageUploaded = await prisma.productImage.create({
      data: {
        image,
        alt,
      },
    });
    console.log('🚀 Uploaded Image', imageUploaded);
    return imageUploaded;
  }
  return image;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function insertSeedData(prisma: PrismaClient) {
  console.log('🌱 Inserting Seed Data');

  // await seedBanners(prisma);
  // await seedProducts(prisma);

  process.exit();
}
