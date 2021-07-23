import { User } from '@prisma/client';
import {
  ApolloServerExpressConfig,
  ExpressContext,
} from 'apollo-server-express';
import { apolloServerContext } from 'src/config/apolloServerContext';

//define extra types here for Nexus:
type ExtraNexusContext = {
  user?: User;
};

export type Context = ExtraNexusContext &
  ApolloServerExpressConfig['context'] &
  ExpressContext &
  ReturnType<typeof apolloServerContext>;
