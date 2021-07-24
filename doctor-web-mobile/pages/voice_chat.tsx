import TopNav from 'components/Navigation/TopNav/TopNav';
import VoiceChat from 'components/VoiceChat/VoiceChat';

const VoiceChatPage = () => {
  return (
    <div>
      <TopNav />
      <VoiceChat img_src={'/assets/user.png'} patient="Rinkita Roy" />
    </div>
  );
};

export default VoiceChatPage;
