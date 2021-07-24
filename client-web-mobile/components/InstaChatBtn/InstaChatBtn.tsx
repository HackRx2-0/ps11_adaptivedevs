import styles from './InstaChatBtn.module.scss';
import { useRouter } from 'next/router';

const InstaChatBtn: React.FunctionComponent = () => {
  const router = useRouter();

  return (
    <div className={'sticky bottom-6 text-center'}>
      <button
        className={
          'h-14 w-14 rounded-full cursor-pointer outline-none' +
          ' ' +
          styles?.inta_btn
        }
        //   ToDO: set route to insta chat page
        onClick={() => router.push('/')}
      >
        <span className={styles?.dot} />
        <span className={styles?.dot} />
        <span className={styles?.dot} />
      </button>
    </div>
  );
};

export default InstaChatBtn;
