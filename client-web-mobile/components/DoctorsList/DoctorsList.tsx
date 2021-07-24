import { useState } from 'react';
import Image from 'next/image';
import {
  HiOutlineChatAlt2,
  HiOutlinePhone,
  HiOutlineVideoCamera,
} from 'react-icons/hi';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs';

import styles from './DoctorsList.module.scss';
import { useRouter } from 'next/router';
import { DoctorCardInterface } from 'components/CustomTypes';
import { useGetOnlineDoctorsQuery } from 'graphql/generated/graphql';
import PaymentDialog from 'components/PaymentDialog/PaymentDialog';

interface StatusInterface {
  status?: string;
}

const DoctorStatus: React.FunctionComponent<StatusInterface> = (
  props: StatusInterface
) => {
  let status = props.status;
  let color: string = 'warning';

  if (status == 'online') {
    color = 'success';
  } else if (status == 'busy') {
    color = 'warning';
  } else if (status == 'offline') {
    color = 'error';
  }

  return (
    <div className={'flex flex-row items-center mt-1.5'}>
      <div className={`bg-${color}` + ' ' + styles?.status_dot}></div>
      <div>
        <span>{props.status}</span>
      </div>
    </div>
  );
};

const DoctorCard: React.FunctionComponent<DoctorCardInterface> = (
  props: DoctorCardInterface
) => {
  const router = useRouter();

  const [accordion, setAccordion] = useState('hidden');

  const [modalDisplay, setModalDisplay] = useState('none');

  const handleClickOpen = () => {
    setModalDisplay('block');
  };

  const handleClickClose = () => {
    setModalDisplay('none');
  };

  const handleAccordion = () => {
    if (accordion == 'hidden') {
      setAccordion('block');
    } else {
      setAccordion('hidden');
    }
  };

  return (
    <div
      className={
        'bg-white rounded-xl m-4 p-5 max-w-screen-sm' +
        ' ' +
        styles?.doctor_card
      }
    >
      <div className={'flex flex-row'}>
        <div className={'bg-none w-28'}>
          <Image
            alt="x"
            src={props.img_src}
            height="150"
            width="150"
            objectFit="cover"
            className={'rounded-xl'}
          />
        </div>
        <div className={'pl-3 pt-3'}>
          <div className={'text-secondary-content-light text-xl font-medium'}>
            <span>{props.doctor}</span>
          </div>
          <div className={'text-gray-600 text-lg'}>
            <span>{props.specialization}</span>
          </div>
          <div className={'leading-tight text-gray-600 text-md'}>
            <span>{props.hospital}</span>
          </div>
          <div>
            <DoctorStatus status={props.status} />
          </div>
        </div>
      </div>

      {/* stats */}
      <div className={'flex flex-row justify-around text-center mt-3 mb-3'}>
        {/* patients */}
        <div className={styles?.stats_elem}>
          <div className={styles?.stat_name}>
            <span>Patients</span>
          </div>
          <div className={styles?.stat_value}>
            <span>{props.patients}+</span>
          </div>
        </div>

        {/* experience */}
        <div className={styles?.stats_elem}>
          <div className={styles?.stat_name}>
            <span>Experience</span>
          </div>
          <div className={styles?.stat_value}>
            <span>{props.experience}</span>
          </div>
        </div>

        {/* Rating */}
        <div className={styles?.stats_elem}>
          <div className={styles?.stat_name}>
            <span>Rating</span>
          </div>
          <div className={styles?.stat_value}>
            <span>{props.rating}</span>
          </div>
        </div>
      </div>

      {/* action panel (buttons) */}
      <div className={'flex flex-row justify-evenly mt-5'}>
        <HiOutlinePhone
          className={styles?.action_icon}
          onClick={() => router.push('/voice_chat')}
        />

        <div>
          {/* trigger */}
          <button onClick={() => handleClickOpen()}>
            <HiOutlineChatAlt2
              className={styles?.action_icon}
              // onClick={() => router.push('/chat_page')}
            />
          </button>

          {/* the model */}
          <div className={styles?.modal} style={{ display: `${modalDisplay}` }}>
            <div className={styles?.modal_content}>
              <span
                className={styles?.close}
                onClick={() => handleClickClose()}
              >
                x
              </span>
              <PaymentDialog />
            </div>
          </div>
        </div>

        <HiOutlineVideoCamera
          className={styles?.action_icon}
          onClick={() => router.push('/video_chat')}
        />
      </div>

      {/* details */}
      <div className={'mt-3 cursor-pointer'}>
        <div
          className={`text-lg leading-tight ${accordion} transition duration-1000 ease-in-out`}
        >
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus in
            sequi neque veniam ullam nemo laborum soluta dolorem ab tenetur
            aperiam possimus hic blanditiis voluptates
          </span>
        </div>
        {accordion == 'hidden' ? (
          <BsChevronCompactDown
            className={'m-auto text-2xl'}
            onClick={() => handleAccordion()}
          />
        ) : (
          <BsChevronCompactUp
            className={'m-auto text-2xl'}
            onClick={() => handleAccordion()}
          />
        )}
      </div>
    </div>
  );
};

const DoctorsList: React.FunctionComponent = () => {
  const { data, loading } = useGetOnlineDoctorsQuery();
  {
    if (loading) return <div> loading ... </div>;
  }
  return (
    <div
      className={
        'pb-20 md:pb-5 pt-14 overflow-hidden flex flex-col justify-items-center' +
        ' ' +
        styles.container
      }
    >
      {data?.doctors?.map((doctor, index) => (
        <DoctorCard
          key={index}
          doctor={doctor?.display_name as string}
          //@ts-ignore
          specialization={doctor?.specialities[0]?.name}
          hospital="Apollo Hospitals, Guwahati"
          img_src="/images/doctor.png"
          patients="500"
          experience="4 Years"
          rating="4.8"
          status={doctor?.is_online ? 'online' : 'offline'}
        />
      ))}
    </div>
  );
};

export default DoctorsList;
