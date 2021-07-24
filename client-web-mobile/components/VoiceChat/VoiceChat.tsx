import styles from './VoiceChat.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import { FiMic, FiMicOff } from 'react-icons/fi';
import { HiOutlineChatAlt2, HiOutlinePhoneMissedCall } from 'react-icons/hi';

interface VoiceChatInterface {
  img_src: string;
  doctor?: string;
}

const VoiceChat: React.FunctionComponent<VoiceChatInterface> = (
  props: VoiceChatInterface
) => {
  const [isMute, setIsMute] = useState(false);

  const handleIsMute = () => {
    if (isMute) {
      setIsMute(false);
    } else {
      setIsMute(true);
    }
  };

  return (
    <div
      className={
        'min-h-screen flex flex-col justify-evenly' + ' ' + styles?.container
      }
    >
      {/* Call Body */}
      <div className={'w-full  flex flex-col items-center'}>
        <div className={'p-4 rounded-2xl border-2 border-gray-400'}>
          <div className={'p-4 rounded-2xl border-2 border-gray-300'}>
            <div className={'p-1 border-2 border-gray-200 rounded-2xl'}>
              <Image
                alt="doctor profile"
                src={props?.img_src}
                height="120"
                width="120"
              />
            </div>
          </div>
        </div>
      </div>

      {/* doctor name & time */}
      <div className={'mx-auto text-center'}>
        <div className={'text-xl text-gray-700 font-medium'}>
          <span>{props?.doctor}</span>
        </div>
        <div className={'text-lg text-gray-600'}>
          <span>06:12</span>
        </div>
      </div>

      {/* call controls */}
      {/* <div className={'fixed w-full top-2/3'}> */}
      <div>
        <div
          className={
            'h-20  bottom-10  w-11/12 flex flex-row \
          justify-evenly items-center rounded-3xl mx-auto' +
            ' ' +
            styles?.bottom_actions
          }
        >
          <div onClick={() => handleIsMute()}>
            {isMute ? (
              <FiMicOff className={' ' + styles.action_icon} />
            ) : (
              <FiMic className={' ' + styles.action_icon} />
            )}
          </div>
          <div>
            <HiOutlineChatAlt2 className={' ' + styles.action_icon} />
          </div>
          <div>
            <HiOutlinePhoneMissedCall className={' ' + styles.action_icon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceChat;
