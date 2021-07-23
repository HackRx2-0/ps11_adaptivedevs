import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cookieSession from 'cookie-session';
import { apolloServerConfig } from './config/apolloServerConfig';

const apollo = new ApolloServer(apolloServerConfig);

const app = express();

app.set('trust proxy', 1);
app.use(
  cookieSession({
    name: 'session',
    keys: [process.env.COOKIE_SESSION_KEY as string],
    maxAge: 1000 * 60 * 60 * 24 * 30 * 6, //6 months
  })
);

apollo.start().then(() => {
  apollo.applyMiddleware({ app });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(
    `🚀 Server running on http://localhost:${PORT} , GraphQL playground at http://localhost:${PORT}/graphql `
  );
});
