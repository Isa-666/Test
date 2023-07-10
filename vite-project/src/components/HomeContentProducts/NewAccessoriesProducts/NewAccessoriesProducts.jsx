import React,{useState,useEffect} from 'react'
import {Grid} from "@material-ui/core"
import ProductItem from '../../ProductItem/ProductItem'
import styles from "./newaccessoriesproducts.module.css"
import useFetch from '../../../hooks/useFetch'
import { commerce } from '../../../lib/commerce'
import MoonLoader from "react-spinners/MoonLoader";
const NewAccessoriesProducts = () => {

  const {loading,newAccessories }=useFetch(commerce);

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
    <div className={styles.container}>
    
    {newAccessories?.map((product) => (
      <ProductItem key={product.id} product={product} />
    ))}
  </div>
  )
}

export default NewAccessoriesProducts