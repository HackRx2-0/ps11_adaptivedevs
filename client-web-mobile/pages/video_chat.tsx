import TopNav from 'components/Navigation/TopNav/TopNav';
import VideoChat from 'components/VideoChat/VideoChat';

const VideoChatPage = () => {
  const doctorName = 'Dr. Manish Kumar';

  return (
    <div>
      <TopNav doctor={doctorName} />
      <VideoChat />
    </div>
  );
};

export default VideoChatPage;
