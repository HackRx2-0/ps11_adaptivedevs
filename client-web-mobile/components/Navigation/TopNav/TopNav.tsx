import { TopNavInterface } from 'components/CustomTypes';
import { HiArrowLeft, HiDotsHorizontal } from 'react-icons/hi';
import { useRouter } from 'next/router';

const TopNav: React.FunctionComponent<TopNavInterface> = (
  props: TopNavInterface
) => {
  const router = useRouter();

  return (
    <div
      className={'flex flex-row justify-between p-3 px-6 pb-6 bg-transparent'}
    >
      <div
        className={
          'bg-base-100-light text-secondary-content-light hover:bg-secondary-light \
          hover:text-primary-content-light p-2 rounded-lg cursor-pointer'
        }
        onClick={() => router.back()}
      >
        <HiArrowLeft className={'h-auto w-8'} />
      </div>
      <div
        className={
          'flex flex-col justify-center text-lg text-secondary-content-light'
        }
      >
        <span>{props?.doctor}</span>
      </div>
      <div
        className={
          'bg-base-100-light text-secondary-content-light hover:bg-secondary-light \
            hover:text-primary-content-light p-2 rounded-lg cursor-pointer'
        }
      >
        <HiDotsHorizontal className={'h-auto w-8'} />
      </div>
    </div>
  );
};

export default TopNav;
