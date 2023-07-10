import React from "react";
import styles from "./productarticleitem.module.css";
const ProductArticleItem = ({productArticle,AddToCart}) => {

  return (
    <div className={styles.productArticle_container}>
        <div className={styles.about_product}>
      <div className={styles.product_description} dangerouslySetInnerHTML={{ __html: productArticle.description }}></div>
        
      <div className={styles.productPrice}>{productArticle.price.raw}AZN-den</div>
      <div><button onClick={()=>AddToCart(productArticle.id , 1)} className={styles.buttonStyle}>Indi al</button></div>
      </div>
      <div><img className={styles.product_image} src={productArticle.image?.url}/></div>
    </div>
  );
};

export default ProductArticleItem;
