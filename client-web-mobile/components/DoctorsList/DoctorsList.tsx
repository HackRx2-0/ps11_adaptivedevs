import Image from 'next/image';
import styles from './DoctorsList.module.scss';

const DoctorCard: React.FunctionComponent = () => {
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
            src="/images/doctor.png"
            height="150"
            width="150"
            objectFit="cover"
            className={'rounded-xl'}
          />
        </div>
        <div className={'pl-3 pt-3'}>
          <div className={'text-secondary-content-light text-xl font-medium'}>
            <span>Dr. Jhonny Wilson</span>
          </div>
          <div className={'text-gray-600 text-lg'}>
            <span>Heart Surgeon</span>
          </div>
          <div className={'leading-tight text-gray-600 text-md'}>
            <span>Apollo Hospitals, Guwahati</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DoctorsList: React.FunctionComponent = () => {
  return (
    <div className={'pb-20 md:pb-5'}>
      <DoctorCard />
    </div>
  );
};

export default DoctorsList;
