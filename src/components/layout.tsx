import React, { ReactNode } from 'react'
import * as styles from './layout.module.scss';
import '@fontsource/kumbh-sans';

import Blob from './blob';
import Blob2 from './blob2';
import MouseCanvas from './mouse';

interface Props {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={ styles.container }>
      { children }
      <Blob/>
      <Blob2/>
      <MouseCanvas  />

      <div className={ styles.bottomblob }>
        {/* <div className={ styles.bottomblobinner }></div> */}
      </div>
    </div>
  )
};

export default Layout;