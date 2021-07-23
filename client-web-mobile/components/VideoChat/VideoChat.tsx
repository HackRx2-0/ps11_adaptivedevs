import { HiOutlineChatAlt2, HiOutlinePhoneMissedCall } from 'react-icons/hi';
import { FiMic, FiMicOff, FiCamera, FiCameraOff } from 'react-icons/fi';

import styles from './VideoChat.module.scss';

import { useRouter } from 'next/router';
import { useState } from 'react';

const VideoConf: React.FunctionComponent = () => {
  const [isMute, setIsMute] = useState(false);
  const [isCamOff, setIsCamOff] = useState(false);
  const router = useRouter();

  const handleISMute = () => {
    if (isMute) {
      setIsMute(false);
    } else {
      setIsMute(true);
    }
  };

  const handleIsCamOff = () => {
    if (isCamOff) {
      setIsCamOff(false);
    } else {
      setIsCamOff(true);
    }
  };

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
          <div className={'text-white text-xl font-medium'}>
            Dr. Manish Kumar
          </div>
          <div className={'text-gray-100 text-lg font-regular'}>12:06</div>
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
        <div onClick={() => handleISMute()}>
          {isMute ? (
            <FiMicOff className={' ' + styles.action_icon} />
          ) : (
            <FiMic className={' ' + styles.action_icon} />
          )}
        </div>
        <div>
          <HiOutlineChatAlt2 className={' ' + styles.action_icon} />
        </div>
        <div onClick={() => handleIsCamOff()}>
          {isCamOff ? (
            <FiCameraOff className={' ' + styles.action_icon} />
          ) : (
            <FiCamera className={' ' + styles.action_icon} />
          )}
        </div>
        <div>
          <HiOutlinePhoneMissedCall className={' ' + styles.action_icon} />
        </div>
      </div>
    </div>
  );
};

export default VideoConf;
