import { useRouter } from 'next/router';
import {
  HiOutlineHome,
  HiOutlineClock,
  HiOutlineUserCircle,
} from 'react-icons/hi';
import { RiSyringeLine } from 'react-icons/ri';

const BottomNav: React.FunctionComponent = () => {
  const router = useRouter();

  return (
    <div
      className={
        'bg-primary-light fixed bottom-0 w-full flex flex-row \
        justify-around justify-items-center py-3 text-primary-content-light text-3xl'
      }
    >
      <HiOutlineHome
        className={'self-center'}
        onClick={() => router.push('/')}
      />
      <HiOutlineClock className={'self-center'} />
      <div>{null}</div>
      <HiOutlineUserCircle className={'self-center'} />
      <RiSyringeLine className={'self-center'} />
    </div>
  );
};

export default BottomNav;
