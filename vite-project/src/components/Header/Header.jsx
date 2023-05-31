import React from "react";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import styles from "./header.module.css";
import logo from "./assets/logo.png";
import menu from "./assets/menu.png";
 const Header = () => {
  return (
    <div className={styles.header_container}>
      <div className={styles.header_first_section_container}>
        <div className={styles.logo_container}>
          <img className={styles.menu} src={menu} alt="" /><img className={styles.logo} src={logo} alt="" />
        </div>
        <div className={styles.search_input_container}>
          <FiSearch className={styles.search_icon} />
          <input
            className={styles.search_input}
            placeholder="Search...."
          ></input>
        </div>
        <div className={styles.user_favorite_shop_icons_section}>
          <BiUser className={styles.icon} />
          <AiOutlineHeart className={styles.icon} />
          <div className={styles.shopping_circle_container}>
            <CgShoppingCart className={styles.icon} />
            <div className={styles.circle}>0</div>
          </div>
        </div>
      </div>
      <div className={styles.products_container}>
        <ul className={styles.products}>
          <li className={styles.products_name}>Yeni</li>
          <li className={styles.products_name}>Samsung</li>
          <li className={styles.products_name}>Apple</li>
          <li className={styles.products_name}>Xiaomi</li>
          <li className={styles.products_name}>Redmi</li>
          <li className={styles.products_name}>Bütün Brendlər</li>
          <li className={styles.products_name}>Aksessuarlar</li>
          <li className={styles.products_name}>Endirimlər</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
