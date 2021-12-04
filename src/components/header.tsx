import React from 'react'
import * as styles from './header.module.scss';
import BaIcon from '../images/icon_ba.svg';
import Navigation from './navigation';

const Header = () => {
  return (
    <header className={ styles.container }>
      <div className={ styles.top }>
        <h1 className={ styles.logo }>
            Budapest <br/>
            Kortárstánc <br/>
            Főiskola
        </h1>
        <img src={ BaIcon } alt="" />
      </div>
      <h2 className={ styles.subtitle }>
          Kortástánc <br/>
          művész
      </h2>
      <Navigation/>
    </header>
  )
};

export default Header;