import React, { useEffect, useState } from "react";
import ProductItem from "../../ProductItem/ProductItem";
import styles from "./productMoreSold.module.css";
import { Grid } from "@material-ui/core";
import useFetch from "../../../hooks/useFetch";
import { commerce } from "../../../lib/commerce";
import MoonLoader from "react-spinners/MoonLoader";
import GlobalStyles from '@mui/material/GlobalStyles';
const ProductMoreSold = ({customClass}) => {
  const { productsMoreSold,loading } = useFetch(commerce);
if (loading) {
  return(
    <div className={styles.moonLoader}><MoonLoader
        color={"blue"}
        loading={loading}
        size={50}
      /></div>
  )
}

  return (
    <div className={`${styles.container} ${customClass}`}>
      {productsMoreSold?.map((product) => (
        <ProductItem key={product.id} product={product} {...product} />
      ))}
    </div>
  );
};
GlobalStyles()
export default ProductMoreSold;
