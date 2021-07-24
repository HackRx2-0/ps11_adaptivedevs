import React from 'react';
import MainContainer from './MainContainer';
const MainLayout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export { MainLayout };
