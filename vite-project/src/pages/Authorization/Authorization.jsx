import React,{useState} from 'react';
import styles from './authorization.module.css';
import facebookLogo from "./assets/facebook.png";
import googleLogo from "./assets/google.png";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import girlWithPhone from "./assets/girlWithPhoneDraw.png";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './phone.css'
import Dots from "./assets/Dots.png";
const Authorization = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
      setShow(!show);
    };
    const [value,setValue]=useState()

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
            <p>Ad, Soyad</p>
            <input className={styles.input_text} type="text" placeholder="Ad və soyadınızı daxil edin"/>
          </div>
          <div className={styles.input_email_container}>
              <p>E-mail</p>
              <input
                className={styles.input_text}
                type="text"
                placeholder="nümunə@gmail.com"
              />
            </div>
            <div className={styles.input_phone_container}>
                <p>Mobil nömrə</p>
                <PhoneInput
                className="phone"
                international = {false}
                
                value={value}
                country={'az'}
                   placeholder='000 - 00 - 00'
                    onChange={(value) => setValue(value)}
                />
</div>

          <div className={styles.input_pass_container}>
            <p>Şifrə</p>
            <input className={styles.input_pass} type={show ? "text" : "password"} placeholder="***********"/>
            <label onClick={handleShow} className={styles.eye_label}>
              {show ? <FaEyeSlash /> : <FaEye />}
            </label>
          </div>
          <div className={styles.user_terms_container}><input className={styles.user_terms_checkbox} type='checkbox'/><span className={styles.user_rules}>İstifadəçi şərtləri</span><span>ilə razıyam</span></div>
          <button className={styles.enter_account}>Daxil ol</button>
        </form>
      </div>
    </div>
    <div className={styles.image_contianer}>
      <div className={styles.image_section}>
        <img className={styles.girl_with_phone} src={girlWithPhone} alt="" />
        <img className={styles.dots_image} src={Dots} alt="" />{" "}
        <span className={styles.sign_up}>
        Artıq hesabınız var?  <Link className={styles.authorization} to={"/Login"}>Daxil olun </Link>
        </span>
      </div>
    </div>
  </div>
  )
}

export default Authorization