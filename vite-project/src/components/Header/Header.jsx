import React, { useState, useEffect } from "react";
import { BiUser } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import styles from "./header.module.css";
import logo from "./assets/logo.png";
import ProductItem from "../ProductItem/ProductItem";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { commerce } from "../../lib/commerce";
import SearchResultList from "../SearchResultsSection/SearchResultList/SearchResultList";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { products } = useFetch(commerce);
  const [results, setResults] = useState([]);
  const getResult = (value) => {
    const results = products.filter((pro) => {
      if (pro) {
         return (
        value &&
        pro &&
        pro.name &&
        pro.name?.toLowerCase().includes(value.toLowerCase())
      )
      }
     
    });
    setResults(results);
  };

  const handleChange = (value) => {
    setSearchTerm(value);
    getResult(value);
  }

  return (
    <div className={styles.header_container}>
      <div className={styles.mobile_hamburger}>
        <GiHamburgerMenu className={styles.hamburger_logo} />
      </div>
      <div className={styles.header_first_section_container}>
        <div className={styles.logo_container}>
          <Link to={"/"}>
            <img className={styles.logo} src={logo} alt="" />
          </Link>
        </div>
        <div>
          <div className={styles.search_input_container}>
            <FiSearch className={styles.search_icon} />
            <input
              className={styles.search_input}
              placeholder="Search...."
              value={searchTerm}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
          <div className={styles.input_products_filter}>
            <SearchResultList handleChange={handleChange} results={results} />
          </div>
        </div>
        <div className={styles.user_favorite_shop_icons_section}>
          <Link className={styles.icon_link_style} to={"/Login"}>
            <BiUser className={styles.icon} />
          </Link>
          <AiOutlineHeart className={styles.icon} />
          <Link className={styles.cart_link} to={"/Cart"}><div className={styles.shopping_circle_container}>
            <CgShoppingCart className={styles.icon} />
            <div className={styles.circle}>0</div>
          </div></Link>
        </div>
      </div>
      <ul className={styles.category_container}>
        <li className={styles.category_name}>Yeni</li>
        <li className={styles.category_name}>Apple</li>
        <li className={styles.category_name}>Samsung</li>
        <li className={styles.category_name}>Xiaomi</li>
        <li className={styles.category_name}>Bütün Brendlər</li>
        <li className={styles.category_name}>Aksessuarlar</li>
      </ul>
      <div className={`${open ? styles.active : styles.inactive}`}></div>
    </div>
  );
};

export default Header;
