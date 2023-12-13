import { list } from '@keystone-6/core';
import { allowAll } from '@keystone-6/core/access';
import { relationship, integer, text } from '@keystone-6/core/fields';

export const Order = list({
  access: allowAll,
  fields: {
    total: integer({
      validation: { isRequired: true },
      isOrderable: true,
    }),
    items: relationship({ ref: 'OrderItem.order', many: true }),
    user: relationship({ ref: 'User.orders' }),
    charge: text(),
  },
});
