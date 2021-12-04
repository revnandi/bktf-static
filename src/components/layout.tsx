import React, { ReactNode } from 'react'
import * as styles from './layout.module.scss';
import '@fontsource/kumbh-sans';

import MouseCanvas from './mouse';

interface Props {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={ styles.container }>
      { children }
      <MouseCanvas />
    </div>
  )
};

export default Layout;