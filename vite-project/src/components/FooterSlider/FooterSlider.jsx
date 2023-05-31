import React from "react";
import styles from "./footerslider.module.css";
import "slick-carousel/slick/slick.css";
import sponsors from "./assets/Rectangle 154.png";
import sponsors1 from "./assets/Rectangle 154 (1).png";
import sponsors2 from "./assets/Rectangle 154 (2).png";
import sponsors3 from "./assets/Rectangle 154 (3).png";
import sponsors4 from "./assets/Rectangle 154 (4).png";
import sponsors5 from "./assets/Rectangle 154 (5).png";
import sponsors6 from "./assets/acer.png";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import MagicSliderDots from "react-magic-slider-dots";
import "react-magic-slider-dots/dist/magic-dots.css";
const FooterSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1000,
    appendDots: (dots) => {
      return <MagicSliderDots dots={dots} numDotsToShow={4} dotWidth={30} />;
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.footer_slider_container}>
      <div className={styles.footer_slider}><Slider {...settings}>
        <div className={styles.sponsor_container}>
          <div className={styles.sponsors}>
            <img src={sponsors} alt="" />
          </div>
        </div>
        <div className={styles.sponsor_container}>
          <div className={styles.sponsors}>
            <img src={sponsors1} alt="" />
          </div>
        </div>
        <div className={styles.sponsor_container}>
          <div className={styles.sponsors}>
            <img src={sponsors2} alt="" />
          </div>
        </div>
        <div className={styles.sponsor_container}>
          <div className={styles.sponsors}>
            <img src={sponsors3} alt="" />
          </div>
        </div>
        <div className={styles.sponsor_container}>
          <div className={styles.sponsors}>
            <img src={sponsors4} alt="" />
          </div>
        </div>
        <div className={styles.sponsor_container}>
          <div className={styles.sponsors}>
            <img src={sponsors5} alt="" />
          </div>
        </div>
        <div className={styles.sponsor_container}>
          <div className={styles.sponsors}>
            <img src={sponsors6} alt="" />
          </div>
        </div>
        <div className={styles.sponsor_container}>
          <div className={styles.sponsors}>
            <img src={sponsors} alt="" />
          </div>
        </div>
        <div className={styles.sponsor_container}>
          <div className={styles.sponsors}>
            <img src={sponsors} alt="" />
          </div>
        </div>
        <div className={styles.sponsor_container}>
          <div className={styles.sponsors}>
            <img src={sponsors} alt="" />
          </div>
        </div>
      </Slider>
      </div>
    </div>
  );
};

export default FooterSlider;
