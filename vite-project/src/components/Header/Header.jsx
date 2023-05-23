import React from 'react';
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from 'react-icons/ai';
import { CgShoppingCart } from 'react-icons/cg';
import { FiSearch } from "react-icons/fi";
import styles from "./header.module.css";
import logo from "./assets/logo.png";
const Header = () => {
    return (
        <div className={styles.header_container}>
            <div className={styles.header_first_section_container}>
                <div><img className={styles.logo} src={logo} alt="" /></div>
                <div className={styles.search_input_container}><FiSearch className={styles.search_icon} /><input className={styles.search_input} placeholder='Axtarış...'></input></div>
                <div className={styles.user_favorite_shop_icons_section}><BiUser className={styles.icon} /><AiOutlineHeart className={styles.icon} /><div className={styles.shopping_circle_container}><CgShoppingCart className={styles.icon} /><div className={styles.circle}>0</div></div></div>
            </div>
<div className={styles.products_container}><ul className={styles.products}>
<li>Yeni</li>
<li>Samsung</li>
<li>Apple</li>
<li>Xiaomi</li>
<li>Redmi</li>
<li>Bütün Brendlər</li>
<li>Aksessuarlar</li>
<li>Endirimlər</li>
</ul>
</div>
        </div>
    )
}

export default Header