import React from "react";
import styles from "./footer.module.css";
import logo from "./assets/logo.png";
import facebook from "./assets/facebook.png";
import youtube from "./assets/youtube.png";
import twitter from "./assets/twitter.png";
import instagram from "./assets/instagram.png";
import location from "./assets/location.png";
import call from "./assets/call.png";
import email from "./assets/mail.png";
import copyright from "./assets/copyright.png";
 const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_first_section}>
        <div className={styles.Tello_footer_fundament}>
          <div className={styles.Tello_footer_container}>
            <img src={logo} alt="" />
            <span className={styles.tello_text}>Tello</span>
          </div>
          <div className={styles.social_network_container}>
            <img
              className={styles.social_network_instagram}
              src={instagram}
              alt=""
            />
            <img
              className={styles.social_network_facebook}
              src={facebook}
              alt=""
            />
            <img
              className={styles.social_network_youtube}
              src={youtube}
              alt=""
            />
            <img
              className={styles.social_network_twitter}
              src={twitter}
              alt=""
            />
          </div>
        </div>
        <div className={styles.footer_about_site_container}>
          <div className={styles.footer_about_menu_section}>
            <span>Menu</span>
            <div>
              <ul className={styles.menu_section}>
                <li className={styles.menu_faq}>Yeni</li>
                <li className={styles.menu_faq}>Endirimlər</li>
                <li className={styles.menu_faq}>Aksessuarlar</li>
                <li className={styles.menu_faq}>Bütün brendlər</li>
              </ul>
            </div>
          </div>
          <div className={styles.footer_about_menu_section}>
            <span>Kömək</span>
            <div>
              <ul className={styles.menu_section}>
                <li className={styles.menu_faq}>Tez-tez soruşulan suallar</li>
                <li className={styles.menu_faq}>Çatdırılma xidməti</li>
                <li className={styles.menu_faq}>Geri qaytarılma şərtləri</li>
              </ul>
            </div>
          </div>
          <div className={styles.footer_about_menu_section}>
            <span>Əlaqə</span>
            <div>
              <ul className={styles.menu_section}>
                <li className={styles.location_faq}>
                  <img src={location} alt="" />
                  M. K. Ataturk avenue 89, Baku, Azerbaijan
                </li>
                <li className={styles.email_faq}>
                  <img src={email} alt="" />
                  example@gmail.com
                </li>
                <li className={styles.call_faq}>
                  <img src={call} alt="" />
                  *2108
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer_second_section}>
        <div className={styles.second_section_text}>
          <div>© PeojectX 2021. Bütün hüquqlar qorunur.</div>
          <ul className={styles.about_rules}>
            <li className={styles.rules}>Qaydalar və şərtlər</li>
            <li className={styles.rules}>Məxfilik siyasəti</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
