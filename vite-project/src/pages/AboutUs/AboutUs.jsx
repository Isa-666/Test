import React from "react";
import { motion } from "framer-motion";
import styles from "./aboutus.module.css";
import quality from "./assets/quality.png";
import CustomerSatisfaction from "./assets/CustomerSatisfaction.png";
import CreativeApproach from "./assets/CreativeApproach.png";
import YoungPeople from "./assets/YoungPeople.png";
import BestPrices from "./assets/BestPrices.png";
import Gifts from "./assets/Gifts.png";
const AboutUs = () => {
  const opacityAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className={styles.whole_container}>
      <div className={styles.about_us_text_container}>
        <span>Haqqımızda</span>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={opacityAnimation}
        viewport={{amount:1}}
        className={styles.about_tello}
      >
        <div className={styles.about_tello_text_container}>
          <h3>Tello</h3>
          <p className={styles.tello_text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lectus
            eget dignissim quis cursus orci ipsum. Volutpat ut varius nunc
            fringilla habitasse netus. Eget lorem parturient sed purus leo,
            fringilla adipiscing nisl. Turpis dictumst amet, amet dictum turpis
            mauris suscipit sit. Enim risus tincidunt ipsum, nunc, sed cras. Est
            in venenatis lobortis quis laoreet velit. Consectetur malesuada
            pellentesque ac velit fringilla est venenatis. Enim, sagittis
            lobortis lacus, arcu commodo. Sagittis, varius ac nulla a. Dui nisl,
            blandit in id hendrerit. Risus diam risus, nec sit. Sed mi arcu
            gravida iaculis tellus mollis tempor ac.
          </p>
        </div>
      </motion.div>
      <div className={styles.worth}>
        <span>Dəyərlərimiz</span>
      </div>
      <div className={styles.arguments_fundament}>
        <motion.div
                   initial="hidden"
                   whileInView="visible"
                   variants={opacityAnimation}
                   viewport={{amount:1}}
        className={styles.arguments_container}>
          <div className={styles.quality_container}>
            <div className={styles.image}>
              <img src={quality} alt="" />
            </div>
            <div className={styles.quality_section}>
              <h3>Keyfiyyət</h3>
              <p className={styles.quality_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                consectetur facere blanditiis soluta neque? Quasi ex nostrum,
                totam vero dolorem ea iusto voluptate doloremque! Provident est
                assumenda dignissimos libero voluptates!
              </p>
            </div>
          </div>
        </motion.div>
        <div className={styles.arguments_container}>
          <motion.div
                initial="hidden"
                whileInView="visible"
                variants={opacityAnimation}
                viewport={{amount:1}}
                 className={styles.quality_container}>
            <div className={styles.image}>
              <img src={CustomerSatisfaction} alt="" />
            </div>
            <div className={styles.quality_section}>
              <h3>Müştəri məmnuniyyəti</h3>
              <p className={styles.quality_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                consectetur facere blanditiis soluta neque? Quasi ex nostrum,
                totam vero dolorem ea iusto voluptate doloremque! Provident est
                assumenda dignissimos libero voluptates!
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
                   initial="hidden"
                   whileInView="visible"
                   variants={opacityAnimation}
                   viewport={{amount:1}}
        className={styles.arguments_container}>
          <div className={styles.quality_container}>
            <div className={styles.image}>
              <img src={CreativeApproach} alt="" />
            </div>
            <div className={styles.quality_section}>
              <h3>Kreativ yanaşma</h3>
              <p className={styles.quality_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                consectetur facere blanditiis soluta neque? Quasi ex nostrum,
                totam vero dolorem ea iusto voluptate doloremque! Provident est
                assumenda dignissimos libero voluptates!
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={opacityAnimation}
        viewport={{amount:1}}
        className={styles.arguments_container}>
          <div className={styles.quality_container}>
            <div className={styles.image}>
              <img src={YoungPeople} alt="" />
            </div>
            <div className={styles.quality_section}>
              <h3>Gənclər</h3>
              <p className={styles.quality_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                consectetur facere blanditiis soluta neque? Quasi ex nostrum,
                totam vero dolorem ea iusto voluptate doloremque! Provident est
                assumenda dignissimos libero voluptates!
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
         initial="hidden"
         whileInView="visible"
         variants={opacityAnimation}
         viewport={{amount:1}}
        className={styles.arguments_container}>
          <div className={styles.quality_container}>
            <div className={styles.image}>
              <img src={BestPrices} alt="" />
            </div>
            <div className={styles.quality_section}>
              <h3>Ən yaxşı qiymətlər</h3>
              <p className={styles.quality_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                consectetur facere blanditiis soluta neque? Quasi ex nostrum,
                totam vero dolorem ea iusto voluptate doloremque! Provident est
                assumenda dignissimos libero voluptates!
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
        initial="hidden"
        whileInView="visible"
        variants={opacityAnimation}
        viewport={{amount:1}}
        className={styles.arguments_container}>
          <div className={styles.quality_container}>
            <div className={styles.image}>
              <img src={Gifts} alt="" />
            </div>
            <div className={styles.quality_section}>
              <h3>Çoxlu hədiyyələr</h3>
              <p className={styles.quality_text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                consectetur facere blanditiis soluta neque? Quasi ex nostrum,
                totam vero dolorem ea iusto voluptate doloremque! Provident est
                assumenda dignissimos libero voluptates!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
