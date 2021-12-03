import React, { ReactNode } from 'react'
import * as styles from './layout.module.scss';

import Header from './header';
import Main from './main';

console.log(styles);

interface Props {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={ styles.container }>
      <Header/>
      <Main/>
    </div>
  )
};

export default Layout;