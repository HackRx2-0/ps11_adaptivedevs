import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { useMemo } from 'react';

let apolloClient: ApolloClient<NormalizedCacheObject>;

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window == 'undefined',
    link: httpLink,
    cache: new InMemoryCache(),
  });
}
export function initializeApollo(initialState?: NormalizedCacheObject) {
  const _apolloClient = apolloClient ?? createApolloClient();
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  if (typeof window === 'undefined') {
    return _apolloClient;
  }
  apolloClient = apolloClient ?? _apolloClient;
  return apolloClient;
}
export function useApollo(initialState: NormalizedCacheObject) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
