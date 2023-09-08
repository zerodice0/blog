import { PropsWithChildren } from 'react';
import Header from './components/header'

const SubLayout = ({children}: PropsWithChildren) => {
  return (
    <>
      <Header/>
      {children}
    </>
  );
}

export default SubLayout;
