import React from 'react';
import Phones from "./assets/image 1.png";
import Phonesbg from "./assets/Rectangle 156.png";
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
        },
        responsive: [
          {
            breakpoint: 390,
            settings: {
              slidesToShow: 1,
              dots:false,
              slidesToScroll: 1,
            },
          },
        ],
      };
  return (
<div >
        <Slider {...settings}>
          <div className={styles.container}>
            <div className={styles.bg_phones} style={{ backgroundImage: `url('${Phonesbg}')`}}>
              <div className={styles.buy_sell_text}>
              Buy & Sell <p>What's Now & Next</p>
              <div className={styles.another_text} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </div>
              </div>     
              <img  className={styles.pictures} src={Phones} alt="" />
              </div>
          </div>
          <div className={styles.container}>
          <div className={styles.bg_phones} style={{ backgroundImage: `url('${Phonesbg}')` }}>
               <div className={styles.buy_sell_text}>
              Buy & Sell <p>What's Now & Next</p>
              <div className={styles.another_text} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </div>
              </div>
              <img  className={styles.pictures} src={Phones} alt="" />
             </div>
          </div>
          <div className={styles.container}>
          <div className={styles.bg_phones} style={{ backgroundImage: `url('${Phonesbg}')` }}>
              <div className={styles.buy_sell_text}>
              Buy & Sell <p>What's Now & Next</p>
              <div className={styles.another_text} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis malesuada et leo faucibus </div>
              </div>
              <img  className={styles.pictures} src={Phones} alt="" />
             </div>
          </div>

        </Slider>
      </div>
  )
}

export default Sliders