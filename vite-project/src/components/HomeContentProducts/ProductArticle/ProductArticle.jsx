import React,{useState,useEffect} from "react";
import styles from "./productarticle.module.css";
import { AiFillApple } from "react-icons/ai";
import Button from "../../Button/Button";
import useFetch from "../../../hooks/useFetch";
import { commerce } from "../../../lib/commerce";
import ClipLoader from "react-spinners/ClipLoader"
import ProductArticleItem from "../../ProductItem/ProductArticleItem/ProductArticleItem";
const ProductArticle = ({AddToCart}) => {
const {productArticle,loading}=useFetch(commerce);
if (loading) {
  return(
    <div className={styles.moonLoader}><ClipLoader
        color={"blue"}
        loading={loading}
        size={50}
      /><ClipLoader
      color={"blue"}
      loading={loading}
      size={50}
    /></div>
  )
}

  return (
   <div className={styles.productArticle_container}>
    {productArticle?.map((productArticle)=> (
     <ProductArticleItem key={productArticle.id} AddToCart={AddToCart} productArticle={productArticle}  />
    ))}
   </div>
  );
};

export default ProductArticle;
