import React from 'react';
import { Splide, SplideSlide  } from '@splidejs/react-splide';
import * as styles from './slider.module.scss';
import '@splidejs/splide/dist/css/splide.min.css';
import { StaticImage } from "gatsby-plugin-image";

const Slider = () => {
  return <div className={ styles.container }>
    <Splide
      className={ styles.slider }
      options={ {
        type  : 'fade',
        autoplay: true,
        interval: 3000,
        rewind: true,
        pauseOnHover: false,
        pagination: false,
        lazyload: true,
        arrows: false
      } }
    >
      <SplideSlide className={ styles.slide }>
        <StaticImage
          src="../images/BKTF_LP_01.jpg"
          alt="Táncosok"
          placeholder="blurred"
        />
      </SplideSlide>
      <SplideSlide>
        <StaticImage
          src="../images/BKTF_LP_02.jpg"
          alt="Táncosok"
          placeholder="blurred"
        />
      </SplideSlide>
      <SplideSlide className={ styles.slide }>
        <StaticImage
          src="../images/BKTF_LP_03.jpg"
          alt="Táncosok"
          placeholder="blurred"
        />
      </SplideSlide>
      <SplideSlide>
        <StaticImage
          src="../images/BKTF_LP_04.jpg"
          alt="Táncosok"
          placeholder="blurred"
        />
      </SplideSlide>
    </Splide>
  </div>
};

export default Slider;