import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { MainLayout } from 'components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainLayout>
        <Component {...pageProps}></Component>
      </MainLayout>
    </>
  );
}
export default MyApp;
