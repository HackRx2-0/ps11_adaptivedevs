import React from 'react';

const MainContainer: React.FunctionComponent = ({ children }) => {
  return (
    /** 
    the padding values to be subtracted from w-screen and *h-screen*
    */
    <div className="pb-14 pl-0 sm:pb-0 sm:pl-16 lg:pl-52  w-screen h-screen">
      {children}
    </div>
  );
};

export default MainContainer;
