import React from "react";
import styles from "./productarticle.module.css";
import { AiFillApple } from "react-icons/ai";
import Button from "../Button/Button";
const ProductArticle = ({
  image,
  CustomClass,
  TextClass,
  price,
  AppleText,
  title,
  percentages,
  percentagesTitle,
}) => {
  return (
    <div className={CustomClass}>
      <div className={TextClass}>
        {AppleText && (
          <div className={styles.appleText}>
            <AiFillApple className={styles.apple_logo} />
            <span>AirTag</span>
          </div>
        )}
        <span className={styles.title}>{title}</span>
        <span>
          <h3>{price}</h3>
        </span>
        {percentages && (
          <span className={styles.percentagesTitle}>{percentagesTitle}</span>
        )}
        <Button CustomClass={styles.button} title={"Indi alın"} />
      </div>
      <div className={styles.product_article_image}>
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default ProductArticle;
