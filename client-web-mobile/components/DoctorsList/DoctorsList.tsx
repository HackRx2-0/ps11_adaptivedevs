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

const DoctorCard: React.FunctionComponent<DoctorCardInterface> = (
  props: DoctorCardInterface
) => {
  const router = useRouter();

  const [accordion, setAccordion] = useState('hidden');

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
        {/* ToDo: Need to add URLs */}
        <HiOutlinePhone
          className={styles?.action_icon}
          onClick={() => router.push('/')}
        />
        <HiOutlineChatAlt2 className={styles?.action_icon} />
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
  return (
    <div
      className={
        'pb-20 md:pb-5 pt-14 overflow-hidden flex flex-col justify-items-center'
      }
    >
      <DoctorCard
        doctor="Dr. Jhonny Wilson"
        specialization="Heart Surgeon"
        hospital="Apollo Hospitals, Guwahati"
        img_src="/images/doctor.png"
        patients="500"
        experience="4 Years"
        rating="4.8"
      />
      <DoctorCard
        doctor="Dr. Jhonny Wilson"
        specialization="Heart Surgeon"
        hospital="Apollo Hospitals, Guwahati"
        img_src="/images/doctor.png"
        patients="500"
        experience="4 Years"
        rating="4.8"
      />
      <DoctorCard
        doctor="Dr. Jhonny Wilson"
        specialization="Heart Surgeon"
        hospital="Apollo Hospitals, Guwahati"
        img_src="/images/doctor.png"
        patients="500"
        experience="4 Years"
        rating="4.8"
      />
      <DoctorCard
        doctor="Dr. Jhonny Wilson"
        specialization="Heart Surgeon"
        hospital="Apollo Hospitals, Guwahati"
        img_src="/images/doctor.png"
        patients="500"
        experience="4 Years"
        rating="4.8"
      />
    </div>
  );
};

export default DoctorsList;
