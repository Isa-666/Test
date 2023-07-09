import React, {Component} from 'react'
import PropTypes from 'prop-types';
import aznSymbol from "./assets/azn symbol.png"
import styles from "./productitem.module.css"
import { Link } from 'react-router-dom';

const ProductItem = ({product, discounts}) => {






  return (<Link className={styles.product_link_style} to={`/product-view/${product.id}`}>
    <div className={styles.card_container}>
    <img src={product.image?.url} alt={product.name} />
    <div className={styles.product_info_con}>
      <h4 className={styles.product_info}>{product.name}</h4>
      <div>
        <div className={styles.product_price}>
            <div className={styles.if_discount_product}>
            {discounts && (
              <span className={styles.if_discount_price}>{discounts}₼</span>
            )}
          </div>
          {product.price.raw} <span>
            <img src={aznSymbol} alt="" />
          </span>
        </div>
      </div>
    </div>
  </div> 
  </Link>
  )
}
ProductItem.propTypes = {
    product: PropTypes.object,
  };

export default ProductItem;