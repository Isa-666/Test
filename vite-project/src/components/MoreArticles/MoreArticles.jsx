import React from "react";
import styles from "./morearticle.module.css";
const MoreArticles = ({
  title,
  CustomClass,
  imageClass,
  image,
  productsNumbers,
}) => {
  return (
    <div className={CustomClass}>
      <div className={styles.article_title}>
        {title}
        <span className={styles.productNumbers}>
          Məhsul sayı: {productsNumbers}
        </span>
        <p>
          <span className={styles.go_to_products}>
            Məhsullara keçid{" "}
            <span className={styles.go_to_products}>{">"}</span>
          </span>
        </p>
      </div>
      <div>
        <img className={imageClass} src={image} alt="" />
      </div>
    </div>
  );
};

export default MoreArticles;
