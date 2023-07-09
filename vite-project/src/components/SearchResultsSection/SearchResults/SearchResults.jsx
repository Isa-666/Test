import React from "react";
import styles from "./SearchResult.module.css";
import { Link } from "react-router-dom";
const SearchResults = ({ product, handleChange }) => {
  return (
    <Link
      onClick={(e) => {
        handleChange("");
      }}
      className={styles.product_link_style}
      to={`/product-view/${product.id}`}
    >
      <div className={styles.search_results}>
        <img
          className={styles.search_image_product}
          src={product.image?.url}
          alt=""
        />
        <div className={styles.name_and_price}>
          {product.name}
          <div className={styles.asd}>
            <strong>{product.price?.raw} azn</strong>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResults;
