import styles from './HomeHeader.module.scss';

const HomeHeader: React.FunctionComponent = () => {
  return (
    <div
      className={
        'flex flex-row justify-between items-center px-3 py-3 rounded-b-2xl' +
        ' ' +
        styles?.container
      }
    >
      {/* doctor name */}
      <div className={'text-gray-100 text-lg font-medium'}>
        <span>Welcome Dr. Manish Kumar</span>
      </div>

      {/* toggle btn */}
      <div className={'flex flex-row items-center'}>
        <span className={'leading-tight text-gray-200'}>
          Accept <br />
          Patient
        </span>
        <label className={'ml-2' + ' ' + styles?.toggle_btn}>
          <input type="checkbox" name="" id="" />
          <span className={' ' + styles?.toggle_btn_slider}></span>
        </label>
      </div>
    </div>
  );
};

export default HomeHeader;
