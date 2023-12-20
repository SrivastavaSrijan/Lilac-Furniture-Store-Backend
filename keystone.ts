import { createAuth } from '@keystone-6/auth';
import { config } from '@keystone-6/core';
import { statelessSessions } from '@keystone-6/core/session';

import 'dotenv/config';
import {
  User,
  Product,
  ProductImage,
  Category,
  Banner,
  CartItem,
  ProductVariant,
  extendGraphqlSchema,
  OrderItem,
  Order,
  ProductSnapshot,
} from './schemas';
import { insertSeedData, mutateData } from './scripts';
import { sendPasswordResetToken } from './lib';

const databaseURL = process.env.DATABASE_URL || 'file:./app.db';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long they stay signed in?
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  passwordResetLink: {
    sendToken: async ({ identity, token }) => {
      sendPasswordResetToken(token, identity);
    },
    tokensValidForMins: 60,
  },
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: Add in inital roles here
  },
});
const origin =
  process.env.FRONTEND_URL?.split(',') ?? [process.env.FRONTEND_URL] ??
  'http://localhost:7777';
console.log('🧾 Allowing access from', origin);
export default withAuth(
  config({
    server: {
      cors: {
        origin,
        credentials: true,
      },
    },
    db: {
      provider: 'postgresql',
      url: databaseURL,
      async onConnect(context) {
        console.log('Connected to the database!');
        if (process.argv.includes('--seed'))
          await insertSeedData(context.prisma);
        else if (process.argv.includes('--run'))
          await mutateData(context.prisma);
      },
    },
    lists: {
      // Schema items go in here
      User,
      Product,
      ProductImage,
      ProductVariant,
      ProductSnapshot,
      Category,
      Banner,
      CartItem,
      Order,
      OrderItem,
    },
    extendGraphqlSchema,
    ui: {
      // Show the UI only for poeple who pass this test
      isAccessAllowed: ({ session }) =>
        // console.log(session);
        !!session?.data,
    },
    session: statelessSessions(sessionConfig),
  }),
);
