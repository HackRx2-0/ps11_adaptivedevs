import ChatBody from 'components/Chat/ChatBody/ChatBody';
import ChatBottom from 'components/Chat/ChatBottom/ChatBottom';
import TopNav from 'components/Navigation/TopNav/TopNav';

const ChatPage = () => {
  const doctorName = 'Dr. Manish Kumar';

  return (
    <div>
      <TopNav doctor={doctorName} />
      <ChatBody />
      <ChatBottom />
    </div>
  );
};

export default ChatPage;
