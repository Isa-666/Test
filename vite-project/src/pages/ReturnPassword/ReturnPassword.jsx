import React from 'react'
import styles from './returnpassword.module.css'
import facebookLogo from "./assets/facebook.png";
import googleLogo from "./assets/google.png";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import girlWithPhone from "./assets/girlWithPhoneDraw.png";
import Dots from "./assets/Dots.png";
import emailPage from './assets/email.png'
const ReturnPassword = () => {
  return (
    <div className={styles.fundament}>
      <div className={styles.login_fundament}>
        <div className={styles.login_container}>
          <div className={styles.enter_text_container}>Şifrəmi unutdum</div>
          <div className={styles.another_text}>Doğrulama kodunu almaq üçün e - poçt ünvanınızı daxil edin</div>
        </div>
        <div className={styles.input_section_container}>
          <form className={styles.input_section}>
            <div className={styles.input_text_container}>
              <p>E-mail</p>
              <input
                className={styles.input_text}
                type="text"
                placeholder="nümunə@gmail.com"
              />
            </div>
            <button className={styles.enter_account}>Göndər</button>
          </form>
        </div>
      </div>
      <div className={styles.image_contianer}>
        <div className={styles.image_section}>
          <img className={styles.girl_with_phone} src={emailPage} alt="" />
          <img className={styles.dots_image} src={Dots} alt="" />{" "}
        </div>
      </div>
    </div>
  )
}

export default ReturnPassword