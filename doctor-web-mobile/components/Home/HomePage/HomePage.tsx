import HomeHeader from '../HomeHeader/HomeHeader';
import styles from './HomePage.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  HiOutlinePhone,
  HiOutlineVideoCamera,
  HiOutlineChatAlt2,
} from 'react-icons/hi';

interface PatientCardInterface {
  name?: string;
  img_src: string;
  contact?: string;
  symptoms?: string;
}

const PatientCard: React.FunctionComponent<PatientCardInterface> = (
  props: PatientCardInterface
) => {
  const router = useRouter();

  return (
    <div
      className={
        'bg-white rounded-xl m-4 p-5 max-w-screen-sm' +
        ' ' +
        styles?.patient_card
      }
    >
      <div className={'flex flex-row'}>
        <div className={'bg-none w-28'}>
          <Image
            alt="patient image"
            src={props?.img_src}
            height="150"
            width="150"
            objectFit="cover"
            className={'rounded-xl'}
          />
        </div>
        <div className={'pl-3 pt-3'}>
          <div className={'text-secondary-content-light text-xl font-medium'}>
            <span>{props?.name}</span>
          </div>
          <div className={'text-gray-600 text-lg'}>
            <span>{props?.contact}</span>
          </div>
          <div
            className={
              'leading-tight text-gray-600 text-md border-l-2  border-gray-300 pl-1.5'
            }
          >
            <span>{props?.symptoms}</span>
          </div>
          <div>{/* <DoctorStatus status={props.status} /> */}</div>
        </div>
      </div>

      {/* action panel (buttons) */}
      <div className={'flex flex-row justify-evenly mt-5'}>
        <HiOutlinePhone
          className={styles?.action_icon}
          onClick={() => router.push('/voice_chat')}
        />
        <HiOutlineChatAlt2
          className={styles?.action_icon}
          onClick={() => router.push('/chat')}
        />
        <HiOutlineVideoCamera
          className={styles?.action_icon}
          onClick={() => router.push('/video_chat')}
        />
      </div>
    </div>
  );
};

const HomePage: React.FunctionComponent = () => {
  return (
    <div className="bg-base-200-light">
      <HomeHeader />

      {/* home body part */}
      <div className={'p-3'}>
        {/* card list of current patient */}
        <div>
          <div className={'text-xl my-3 font-medium'}>
            <span>Current Patient</span>
          </div>
        </div>

        {/* cards */}
        <div className={'flex flex-col justify-start items-center'}>
          <PatientCard
            name="Rohit Deo jha"
            img_src="/assets/user.png"
            contact="rohit@xyz.com"
            symptoms="headache, body pain, weakness"
          />
        </div>

        <hr />
      </div>

      {/* card list of upcoming patients */}
      <div className={'p-3'}>
        <div className={'text-xl my-3 font-medium'}>
          <span>Upcoming Patients</span>
        </div>

        {/* cards */}
        <div className={'flex flex-col justify-start items-center'}>
          <PatientCard
            name="Partha Hazarika"
            img_src="/assets/user.png"
            contact="partha@xyz.com"
            symptoms="headache, body pain, weakness"
          />
          <PatientCard
            name="SriRam Srirangam"
            img_src="/assets/user.png"
            contact="sriram@xyz.com"
            symptoms="headache, body pain, weakness"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
