import ChatBody from 'components/Chat/ChatBody/ChatBody';
import ChatBottom from 'components/Chat/ChatBottom/ChatBottom';
import TopNav from 'components/Navigation/TopNav/TopNav';

const ChatPage = () => {
  return (
    <div>
      <TopNav />
      <ChatBody />
      <ChatBottom />
    </div>
  );
};

export default ChatPage;
