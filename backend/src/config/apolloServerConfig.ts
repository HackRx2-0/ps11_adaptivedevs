import { ApolloServerExpressConfig } from 'apollo-server-express';
import schema from 'src/graphql/schema';
import { apolloServerContext } from './apolloServerContext';

export const apolloServerConfig: ApolloServerExpressConfig = {
  context: apolloServerContext,
  schema,
};
