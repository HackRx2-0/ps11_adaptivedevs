import HomeBody from 'components/HomeBody/HomeBody';
import TopHeader from 'components/TopHeader/TopHeader';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DoctoRx</title>
        <meta
          name="description"
          content="A doctor video/audio/chat consultation app for HackRx hackathon 2021"
        />
      </Head>

      <main>
        <TopHeader />
        <HomeBody />
      </main>
    </div>
  );
}
