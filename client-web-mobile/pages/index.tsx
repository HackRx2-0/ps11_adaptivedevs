import HomeBody from 'components/HomeBody/HomeBody';
import InstaChatBtn from 'components/InstaChatBtn/InstaChatBtn';
import BottomNav from 'components/Navigation/BottomNav/BottomNav';
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

      <main className={styles?.container}>
        <TopHeader />
        <HomeBody />
        <BottomNav />
        <InstaChatBtn />
      </main>
    </div>
  );
}
