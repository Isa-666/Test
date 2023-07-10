import React from "react";
import styles from "./cart.module.css";
import shoppingLogo from "./assets/shopping-cart.png";
import { Link } from "react-router-dom";


const Cart = () => {


  return (
    <div className={styles.cart_container}>
      <div className={styles.basket_count}>
        Səbət (0 məhsul)
        <div className={styles.product_container}>
         <div> <div className={styles.empty_cart}>
            <img className={styles.shopsLogo} src={shoppingLogo} alt="" />
            <span>Səbətiniz halhazırda boşdur</span>
            <Link to={"/"}><button className={styles.go_back_shop}>
              Alış-verişə davam et
            </button></Link>
          </div></div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
