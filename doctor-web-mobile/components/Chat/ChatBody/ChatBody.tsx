import styles from './ChatBody.module.scss';
import { CustomChatInterface } from 'components/CustomTypes';
import { useState } from 'react';

interface ChatInterface {
  name?: string;
  doctor?: string;
  msg?: string;
  patient?: string;
}

const ChatStartMsg: React.FunctionComponent = () => {
  return (
    <div
      className={
        'text-center border-2 border-gray-100 w-5/6 m-auto rounded-xl p-3'
      }
    >
      <div className={'text-secondary-light text-lg'}>
        <span>Consultation Started</span>
      </div>
      <div className={'text-gray-300'}>
        <span>you can now interact with your patient</span>
      </div>
    </div>
  );
};

const MsgFromPatient: React.FunctionComponent<ChatInterface> = (
  props: ChatInterface
) => {
  return (
    <div className={'pl-3'}>
      <div className={'flex flex-row py-1 justify-start items-center'}>
        <div className={'bg-black h-8 w-8 rounded-full'}>Img</div>

        <div className={'leading-tight pl-3'}>
          <div className={'text-md text-gray-300'}>
            <span>{props?.patient}</span>
          </div>
          <div className={'text-sm text-gray-300'}>{`2s`} ago</div>
        </div>
      </div>
      <div
        className={
          'w-2/3 bg-gray-200 text-gray-700 p-3 rounded-xl rounded-tl-none leading-tight'
        }
      >
        <span>{props.msg}</span>
      </div>
    </div>
  );
};

const MsgToPatient: React.FunctionComponent<ChatInterface> = (
  props: ChatInterface
) => {
  return (
    <div className={'pr-3 flex flex-col items-end'}>
      <div className={'flex flex-row py-1 items-center'}>
        <div className={'leading-tight pr-3 text-md'}>
          <span>{props?.doctor}</span>
          <div className={'text-sm text-gray-600'}>{`2s`} ago</div>
        </div>
      </div>
      <div
        className={
          'w-2/3 bg-secondary-light text-gray-100 p-3 rounded-xl rounded-tr-none leading-tight'
        }
      >
        <span>{props.msg}</span>
      </div>
    </div>
  );
};

const TypingDialog: React.FunctionComponent = () => {
  return (
    <div
      className={
        'fixed bottom-28 right-6 bg-gray-800 opacity-70 py-1 \
        px-2 text-primary-content-light rounded-2xl'
      }
    >
      <span>typing ...</span>
    </div>
  );
};

const ChatBody: React.FunctionComponent<ChatInterface> = (
  props: ChatInterface
) => {
  const [isTyping, setIsTyping] = useState(true);

  const handleIsTyping = () => {
    setIsTyping(true);
  };

  return (
    <div
      className={
        'pb-28 bg-blue-300 pt-20 min-h-screen' + ' ' + styles?.container
      }
    >
      <ChatStartMsg />
      <MsgFromPatient
        patient={props?.doctor}
        msg="Hello, how can I help you?"
      />
      {/* <MsgToDoctor msg="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem odit, repellendus dicta dolor rem delectus cum sunt! Itaque, aliquid, laudantium atque veritatis non" />
      <MsgFromDoctor
        doctor={props?.doctor}
        msg="Traveling became almost extinct during the pandemic."
      />
      <MsgToDoctor msg="You realize you're not alone as you sit in your bedroom massaging your calves after a long day of playing tug-of-war with Grandpa Joe in the hospital." />
      <MsgFromDoctor
        doctor={props.doctor}
        msg="The bullet pierced the window shattering it before missing Danny's head by mere millimeters."
      /> */}

      {isTyping ? <TypingDialog /> : null}
    </div>
  );
};

export default ChatBody;
