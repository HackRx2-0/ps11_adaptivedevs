import { ExpressContext } from 'apollo-server-express';
import prismaClient from '../prisma/prismaClient';

export const apolloServerContext = (expressContext: ExpressContext) => {
  return {
    ...expressContext,
    prisma: prismaClient,
  };
};
