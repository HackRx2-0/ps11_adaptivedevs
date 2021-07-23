import styles from './HomeBody.module.scss';
import Image from 'next/image';
import { DoctorCardInterface } from 'components/CustomTypes';

const DoctorCard: React.FunctionComponent<DoctorCardInterface> = (
  props: DoctorCardInterface
) => {
  return (
    <div
      className={
        'bg-white text-secondary-content-light hover:text-primary-content-light \
            hover:bg-secondary-light p-3 m-2 rounded-lg text-center cursor-pointer'
      }
    >
      {/* <Image alt="x" src="/images/doctor.png" height="80px" width="80px" /> */}
      <Image
        alt={props.img_alt}
        src={props.img_src}
        height="80px"
        width="80px"
      />
      <div>
        <span>{props.specialization}</span>
      </div>
    </div>
  );
};

const HomeBody: React.FunctionComponent = () => {
  return (
    <div className={'bg-base-200-light'}>
      <div
        className={
          'text-3xl text-secondary-content-light my-3 ml-2 font-light mt-2'
        }
      >
        <span>Find a specialist</span>
      </div>

      {/* specialist cards */}
      <div className={'flex flex-row flex-wrap justify-evenly px-4'}>
        <DoctorCard
          specialization="Neurologist"
          img_alt="spec_img"
          img_src="/images/doctor.png"
        />
        <DoctorCard
          specialization="Neurologist"
          img_alt="spec_img"
          img_src="/images/doctor.png"
        />
        <DoctorCard
          specialization="Neurologist"
          img_alt="spec_img"
          img_src="/images/doctor.png"
        />
        <DoctorCard
          specialization="Neurologist"
          img_alt="spec_img"
          img_src="/images/doctor.png"
        />
        <DoctorCard
          specialization="Neurologist"
          img_alt="spec_img"
          img_src="/images/doctor.png"
        />
        <DoctorCard
          specialization="Neurologist"
          img_alt="spec_img"
          img_src="/images/doctor.png"
        />
      </div>
    </div>
  );
};

export default HomeBody;
