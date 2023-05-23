import React from 'react';
import styles from "./cardproduct.module.css"
import aznSymbol from "../Content/assets/azn symbol.png"
const CardProduct = ({ image, title, price, discounts, anotherstyle }) => {
    return (
        <div className={styles.card_container}>
            <div className={`${styles.card_info} , ${anotherstyle}`}><img className={styles.img_mobile} src={image} alt="" />
                <p><div className={styles.product_info}>{title}</div></p>
                <p><div className={styles.product_price}><div className={styles.if_discount_product}>{discounts && <span className={styles.if_discount_price}>{discounts}₼</span>}</div>{price}<span><img src={aznSymbol} alt='' /></span></div></p>
            </div>
        </div>
    )
}

export default CardProduct;