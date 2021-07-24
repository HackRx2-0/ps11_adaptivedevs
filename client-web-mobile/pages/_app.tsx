import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { MainLayout } from 'components/Layout';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'apollo/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps?.apolloState);
  return (
    <>
      <ApolloProvider client={client}>
        <MainLayout>
          <Component {...pageProps}></Component>
        </MainLayout>
      </ApolloProvider>
    </>
  );
}
export default MyApp;
