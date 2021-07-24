import styles from './VideoPopUp.module.scss';
import { HiOutlinePhoneMissedCall } from 'react-icons/hi';
import { IoCallOutline } from 'react-icons/io5';

import { useRouter } from 'next/router';

const VideoPopUp: React.FunctionComponent = () => {
  const router = useRouter();

  return (
    <div className={'h-screen  m-0 p-0 overflow-hidden'}>
      <div className={'bg-gray-400  rounded-b-3xl' + ' ' + styles?.video_panel}>
        <div>
          {/* <video src="/videos/girl.mp4" loop autoPlay></video> */}
          <video
            src="https://firebasestorage.googleapis.com/v0/b/tasnim-dev.appspot.com/o/girl.mp4?alt=media&token=28ced321-64fc-450d-bbd2-c64bcae3485b"
            loop
            autoPlay
          ></video>
        </div>
        <div
          className={
            'fixed bottom-28 left-1/2 transform -translate-x-1/2 text-center'
          }
        >
          <div className={'text-white text-xl font-medium'}>Rinkita Roy</div>
        </div>
      </div>

      {/* control buttons */}
      <div
        className={
          'h-24 fixed bottom-0 w-full flex flex-row justify-evenly \
      items-center bg-primary-light rounded-t-3xl' +
          ' ' +
          styles?.bottom_actions
        }
      >
        <div onClick={() => router.push('/video_chat')}>
          <IoCallOutline className={' ' + styles.action_icon} />
        </div>

        <div onClick={() => router.push('/')}>
          <HiOutlinePhoneMissedCall className={' ' + styles.action_icon} />
        </div>
      </div>
    </div>
  );
};

export default VideoPopUp;
