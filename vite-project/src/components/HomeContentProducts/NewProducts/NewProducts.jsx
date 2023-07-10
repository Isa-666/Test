import React, { useState, useEffect } from "react";
import ProductItem from "../../ProductItem/ProductItem";
import styles from "./newproducts.module.css";
import useFetch from "../../../hooks/useFetch";
import { commerce } from "../../../lib/commerce";
import MoonLoader from "react-spinners/MoonLoader";
const NewProducts = () => {

  const { loading, newProducts } = useFetch(commerce);
  if (loading) {
    return (
      <div className={styles.moonLoader}>
        <MoonLoader color={"blue"} loading={loading} size={50} />
      </div>
    );
  }
  return (
    <div className={styles.container}>
      {newProducts?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default NewProducts;
