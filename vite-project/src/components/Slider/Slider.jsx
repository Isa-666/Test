import React from 'react';
import Phones from "./assets/image 8.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.css";
import Slider from 'react-slick';
import MagicSliderDots from 'react-magic-slider-dots';
import 'react-magic-slider-dots/dist/magic-dots.css';
const Sliders = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        appendDots: dots => {
          return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
        }
      };
  return (
<div >
        <Slider {...settings}>
          <div>
            <img className={styles.pictures} src={Phones} alt="" />
          </div>
          <div>
          <img className={styles.pictures} src={Phones} alt="" />
          </div>
          <div>
          <img className={styles.pictures} src={Phones} alt="" />
          </div>

        </Slider>
      </div>
  )
}

export default Sliders