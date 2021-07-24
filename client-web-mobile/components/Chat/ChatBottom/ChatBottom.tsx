import styles from './ChatBottom.module.scss';

import { MdAttachFile } from 'react-icons/md';

const ChatBottom: React.FunctionComponent = () => {
  return (
    <div
      className={
        'h-24 bg-white fixed bottom-0 w-full flex flex-row justify-evenly items-center rounded-t-3xl'
      }
    >
      <div
        className={
          ' h-14 w-2/3 px-4 bg-gray-200 rounded-xl flex flex-row items-center justify-between'
        }
      >
        <input
          type="text"
          placeholder="type message ..."
          className={'text-lg bg-transparent w-full text-gray-600 outline-none'}
        />
        <div>
          <MdAttachFile
            className={'text-primary-light' + ' ' + styles.attach_icon}
          />
        </div>
      </div>
      <div
        className={
          'bg-primary-light text-primary-content-light h-14 p-4 flex flex-col justify-center rounded-xl'
        }
      >
        Send
      </div>
    </div>
  );
};

export default ChatBottom;
