import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import {
  text,
  timestamp,
  integer,
  checkbox,
  select,
  float,
} from '@keystone-6/core/fields';
import dayjs from 'dayjs';

export const Coupon = list({
  access: allowAll,
  fields: {
    code: text({ isIndexed: 'unique', isFilterable: true }),
    description: text(),
    discountType: select({
      defaultValue: 'PERCENTAGE',
      validation: { isRequired: true },
      options: [
        { label: 'Percentage', value: 'PERCENTAGE' },
        { label: 'Fixed Amount', value: 'FIXED' },
      ],
      ui: { displayMode: 'segmented-control' },
    }),
    discountValue: float({
      validation: { isRequired: true },
      defaultValue: 99.99,
    }),
    validFrom: timestamp({
      defaultValue: dayjs().toISOString(),
      validation: { isRequired: true },
    }),
    validUntil: timestamp({
      defaultValue: new Date(
        dayjs().add(5, 'years').toISOString(),
      ).toISOString(),
      validation: { isRequired: true },
    }),
    usageLimit: integer({ validation: { isRequired: true }, defaultValue: -1 }),
    minimumPurchaseAmount: integer({
      defaultValue: 0,
      validation: { isRequired: true },
    }),
    isActive: checkbox({ defaultValue: true }),
  },
});
