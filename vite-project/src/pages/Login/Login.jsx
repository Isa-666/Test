import React, { useState } from "react";
import styles from "./login.module.css";
import facebookLogo from "./assets/facebook.png";
import googleLogo from "./assets/google.png";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import girlWithPhone from "./assets/girlWithPhoneDraw.png";
import Dots from "./assets/Dots.png";
const Login = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className={styles.fundament}>
      <div className={styles.login_fundament}>
        <div className={styles.login_container}>
          <div className={styles.enter_text_container}>Login</div>
          <div className={styles.facebook_and_google_container}>
            <div className={styles.facbook_container}>
              <img className={styles.facbook_logo} src={facebookLogo} alt="" />
              <span>Facebook ilə</span>
            </div>
            <div className={styles.google_container}>
              <img className={styles.google_logo} src={googleLogo} alt="" />
              <span>Google ilə</span>
            </div>
          </div>
          <div className={styles.another_text}>və ya</div>
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
            <div className={styles.input_pass_container}>
              <p>Şifrə</p>
              <input
                className={styles.input_pass}
                type={show ? "text" : "password"}
                placeholder="***********"
              />
              <label onClick={handleShow} className={styles.eye_label}>
                {show ? <FaEyeSlash /> : <FaEye />}
              </label>
              <span className={styles.forgot_password_section}>
                <Link className={styles.authorization} to={"/ReturnPassword"}>
                Şifrəni unutmusunuz?</Link>
              </span>
            </div>
            <button className={styles.enter_account}>Daxil ol</button>
          </form>
        </div>
      </div>
      <div className={styles.image_contianer}>
        <div className={styles.image_section}>
          <img className={styles.girl_with_phone} src={girlWithPhone} alt="" />
          <img className={styles.dots_image} src={Dots} alt="" />{" "}
          <span className={styles.sign_up}>
            Hesabınız yoxdur? <Link className={styles.authorization} to={"/Authorization"}>Qeydiyyatdan keçin</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
