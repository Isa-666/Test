import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
import Header from "./components/Header/Header";
import Sliders from "./components/Slider/Slider";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { commerce } from "./commerce";
import Products from "./Products/Products";

function App() {
  const [products, setPorducts]=useState([]);

  const fetchProducts= async ()=>{
   const datas= await commerce.products.list()
   setPorducts(datas.data);
  }
  useEffect(()=>{
 fetchProducts()
  }, [])
  return (
    <>

      <Header />
      <Sliders />
      <Content />
      <Products products={products}/>
      <Footer />
    </>
  );
}

export default App;
