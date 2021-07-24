import styles from './PaymentDialog.module.scss';
import { useRouter } from 'next/router';
import { useState } from 'react';
import PaymentGateway from 'components/PaymentGateway/PaymentGateway';

const PaymentDialog: React.FunctionComponent = () => {
  const router = useRouter();

  const [modalDisplay, setModalDisplay] = useState('none');

  const handleClickOpen = () => {
    if (modalDisplay == 'none') {
      setModalDisplay('block');
    } else {
      setModalDisplay('none');
    }
  };

  return (
    <div>
      <div className={'text-xl font-medium'}>
        <span>Select a payment method</span>
      </div>

      <div className={'flex flex-row justify-around my-5 mt-10'}>
        <div className={styles?.btn}>
          <div>
            <span onClick={() => handleClickOpen()}>Prepaid</span>
          </div>
        </div>
        <div className={styles?.btn} onClick={() => router.push('/chat_page')}>
          <span>On-Demand</span>
        </div>
      </div>
      <div style={{ display: `${modalDisplay}` }}>
        <PaymentGateway />
      </div>
    </div>
  );
};

export default PaymentDialog;
