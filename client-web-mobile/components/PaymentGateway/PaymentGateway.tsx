import styles from './PaymentGateway.module.scss';
import { useRouter } from 'next/router';

const PaymentGateway: React.FunctionComponent = () => {
  const router = useRouter();

  return (
    <div>
      <div className={styles?.data_field}>
        <span>Name</span>
        <input type="text" />
      </div>

      <div className={styles?.data_field}>
        <span>Card Number</span>
        <input type="number" />
      </div>

      <div className={styles?.data_field}>
        <span>Valid Till</span>
        <input type="number" />
      </div>

      <div className={styles?.data_field}>
        <span>CVV</span>
        <input type="number" />
      </div>

      <div className={'flex flex-row justify-center' + ' ' + styles?.pay_btn}>
        <span
          className={
            'bg-blue-800 text-white px-4 py-2 text-lg rounded-lg cursor-pointer'
          }
          onClick={() => router.push('/chat_page')}
        >
          Pay
        </span>
      </div>
    </div>
  );
};

export default PaymentGateway;
