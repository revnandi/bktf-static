import React from 'react'
import * as styles from './header.module.scss';

console.log(styles);

const Header = () => {
  return (
    <header className={ styles.container }>
      <nav>
          <ul>
              <li>fdf</li>
              <li>gfh</li>
              <li>hkkh</li>
              <li>fih</li>
          </ul>
      </nav>
    </header>
  )
};

export default Header;