import React, { ReactNode } from 'react'
import * as styles from './layout.module.scss';

console.log(styles);

interface Props {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={ styles.container }>
      {children}
    </div>
  )
};

export default Layout;