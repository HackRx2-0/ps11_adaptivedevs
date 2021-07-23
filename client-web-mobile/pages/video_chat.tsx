import TopNav from 'components/Navigation/TopNav/TopNav';

const VideoChatPage = () => {
  const doctorName = 'Dr. Manish Kumar';

  return (
    <div>
      <TopNav doctor={doctorName} />
      Video Chat
    </div>
  );
};

export default VideoChatPage;
