import type { Context } from '.keystone/types';
import { BaseFields } from '@keystone-6/core';
import { BaseListTypeInfo } from '@keystone-6/core/types';
import { stripe } from './constants';
/* eslint-disable @typescript-eslint/no-explicit-any */
async function hasManyCheck({
  operation,
  field,
  listKey,
  context,
  resolvedData,
  item,
  addValidationError,
}: any) {
  if (operation === 'create' && !resolvedData[field]) {
    addValidationError(`Missing required relationship: ${field}`);
    return;
  }

  const currentModel = await context.prisma[listKey].findFirst({
    where: {
      id: { equals: item?.id },
    },
    select: {
      _count: {
        select: {
          [field]: true,
        },
      },
    },
  });

  const currentCount = currentModel?._count?.[field] || 0;
  const deletedCount = resolvedData?.[field]?.disconnect?.length || 0;

  if (
    !(currentCount - deletedCount) &&
    !resolvedData?.[field]?.connect?.length
  ) {
    addValidationError(`Missing required relationship: ${field}`);
  }
}

const hasOneExistingValue = async ({ field, item, listKey, context }: any) =>
  await context.prisma[listKey].count({
    where: {
      id: { equals: item?.id },
      [field]: { isNot: null },
    },
  });

export async function validateRelationships({
  hasOne = [],
  hasMany = [],
  ...options
}: any) {
  const { operation, resolvedData, addValidationError } = options;

  for (const field of hasMany) await hasManyCheck({ field, ...options });

  for (const field of hasOne) {
    const hasExistingField = await hasOneExistingValue({ field, ...options });
    const noField = !resolvedData[field];
    const fieldRemoved = resolvedData[field]?.disconnect;

    if (
      (operation === 'create' && noField) ||
      (operation === 'update' &&
        (fieldRemoved || (noField && !hasExistingField)))
    )
      addValidationError(`Missing required relationship: ${field}`);
  }
}

export const updateDefaultProductSchema = async (
  prisma: Context['prisma'],
  id: string,
) => {
  const resolvedData = await prisma.product.findUnique({
    where: { id },
    include: { variants: true },
  });
  if (!resolvedData) return;
  if (!resolvedData?.variants || !resolvedData?.variants.length) return;

  const priceMapper = () => {
    const findPrice = (mode: 'min' | 'max') =>
      resolvedData?.variants.reduce(
        (num, c) => {
          if (mode === 'max') return c.price > num ? c.price : num;
          else return c.price < num ? c.price : num;
        },
        resolvedData.variants?.[0]?.price,
      );
    return {
      min: findPrice('min'),
      max: findPrice('max'),
    };
  };
  const { min, max } = priceMapper();
  const lowestPricedVariantId = resolvedData?.variants?.find(
    (variant) => variant.price === min,
  )?.id;
  if (
    resolvedData?.highestPrice === max &&
    resolvedData?.lowestPrice === min &&
    resolvedData?.defaultVariantId === lowestPricedVariantId
  )
    return;
  await prisma.product.update({
    where: { id: resolvedData?.id },
    data: {
      lowestPrice: min,
      highestPrice: max,
      defaultVariantId: lowestPricedVariantId,
    },
  });
  console.log(
    '✨ Updated variant defaults - ',
    id,
    min,
    max,
    lowestPricedVariantId,
  );
};

// Utility function to clone fields
export function cloneFields<T extends BaseListTypeInfo>(
  fields: BaseFields<T>,
): BaseFields<T> {
  // Clone logic goes here
  // Depending on your exact requirements, you might simply return a shallow copy of the fields,
  // or you may need to modify certain field properties (like removing uniqueness constraints).
  return { ...fields };
}

export const getUserDetails = async (context: Context) => {
  const { session } = context;
  if (!session?.itemId)
    throw new Error('Unauthenticated Error', { cause: 403 });
  const res = await context.prisma.user.findUnique({
    where: { id: session?.itemId },
    include: {
      cart: {
        include: {
          variant: true,
        },
      },
    },
  });
  if (!res)
    throw new Error('Cannot find `Cart` for user ' + session?.itemId, {
      cause: 500,
    });

  const { name, email, cart, id } = res;
  const amount =
    cart?.reduce((p, c) => p + (c?.variant?.price ?? 0 * c.quantity ?? 0), 0) *
    100;
  const customer = await stripe.customers.create({
    email: email,
    name: name,
  });
  return { name, email, cart, id, amount, customer };
};
