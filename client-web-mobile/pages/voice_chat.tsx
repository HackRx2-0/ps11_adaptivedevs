import TopNav from 'components/Navigation/TopNav/TopNav';
import VoiceChat from 'components/VoiceChat/VoiceChat';

const VoiceChatPage = () => {
  return (
    <div>
      <TopNav />
      <VoiceChat img_src="/images/doctor.png" doctor="Dr. Manish Kumar" />
    </div>
  );
};

export default VoiceChatPage;
