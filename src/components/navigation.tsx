import React from "react";
import * as styles from "./navigation.module.scss";

import scrollTo from 'gatsby-plugin-smoothscroll';

const Navigation = () => {
  return (
    <nav className={ styles.container }>
      <ul className={ styles.list }>
        <li className={ styles.item } onClick={() => scrollTo('#entrance')}>felvételi</li>
        <li className={ styles.item } onClick={() => scrollTo('#preparatory')}>előkészítő</li>
        <li className={ styles.item } onClick={() => scrollTo('#staff')}>stáb</li>
        <li className={ styles.item } onClick={() => scrollTo('#tuition')}>tandíj</li>
        <li className={ styles.item } onClick={() => scrollTo('#erasmus')}>erasmus</li>
        <li className={ styles.item } onClick={() => scrollTo('#videos')}>videók</li>
        <li className={ styles.item } onClick={() => scrollTo('#movement')}>mozgásban</li>
        <li className={ styles.item } onClick={() => scrollTo('#questions')}>kérdések</li>
        <li className={ styles.item } onClick={() => scrollTo('#contact')}>kapcsolat</li>
      </ul>
    </nav>
  );
};

export default Navigation;
