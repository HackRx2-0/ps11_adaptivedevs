import styles from './TopHeader.module.scss';
import { useRouter } from 'next/router';

import { HiOutlineFilter, HiOutlineSearch } from 'react-icons/hi';

const TopHeader: React.FunctionComponent = () => {
  const router = useRouter();

  return (
    <div>
      <div
        className={
          'bg-primary-light w-full top-0 p-4 text-primary-content-light rounded-b-3xl'
        }
      >
        <div className={'logo text-xl'}>Logo</div>
        <div className={'text-3xl m-4 mt-16'}>
          <span>Find Your Medical Solution</span>
        </div>

        <div className={'flex flex-row place-items-center'}>
          <div
            className={
              'border-2 border-white rounded-md p-1 text-xl mx-3 h-8 w-8'
            }
          >
            <HiOutlineSearch />
          </div>

          <input
            type="text"
            name=""
            id=""
            className={
              'text-green-200 text-xl px-3 outline-none bg-transparent border-b-2 border-gray-200 w-full ml-2 mr-3 cursor-text' +
              ' ' +
              styles.search_input
            }
          />
        </div>

        <div className={'flex flex-row mt-2 mb-3'}>
          <div
            className={
              'border-2 border-white rounded-md p-1.5 text-2xl m-2 w-14 cursor-pointer'
            }
          >
            <HiOutlineFilter className={'m-auto'} />
          </div>

          <div
            className={
              'text-secondary-content-light bg-base-200-light  \
              text-center self-center place-self-center px-4 py-2 mx-2 \
              text-2xl rounded-md w-full cursor-pointer'
            }
            onClick={() => router.push('/doctors_list')}
          >
            <span>Search</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
