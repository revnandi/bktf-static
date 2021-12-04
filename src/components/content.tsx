import React, { ReactNode } from 'react'
import * as styles from './content.module.scss';

interface Props {
  children: ReactNode;
};

const Content = ({ children }: Props) => {
  return (
    <div className={ styles.container }>
      { children }
    </div>
  )
};

export default Content;