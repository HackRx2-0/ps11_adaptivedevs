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
    <div className={'bg-primary-light h-screen m-0 p-0 overflow-hidden'}>
      <div
        className={
          'bg-gray-400  rounded-b-3xl h-20' + ' ' + styles?.video_panel
        }
      >
        Video Panel
        <div
          className={
            'absolute bottom-28 left-1/2 transform -translate-x-1/2 text-center'
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
          'h-24 flex flex-row justify-evenly items-center' +
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
