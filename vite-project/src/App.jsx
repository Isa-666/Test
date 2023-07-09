import React, { useState, useEffect } from "react";
import styles from "./app.module.css";
import { Header, Content, Sliders,Footer } from "./components/exportDefault/ExportDefault";
import { Route, Routes } from "react-router-dom";
import FAQ from "./pages/FAQ/FAQ";
import Error from "./pages/Error/Error";
import AboutUs from "./pages/AboutUs/AboutUs";
import Login from "./pages/Login/Login";
import Authorization from "./pages/Authorization/Authorization";
import ReturnPassword from "./pages/ReturnPassword/ReturnPassword";
import MoreSoldCategoryPage from "./pages/MoreSoldCategoryPage/MoreSoldCategoryPage";
import NewProductsCategoriesPage from "./pages/NewProductsCategoriesPage/NewProductsCategoriesPage";
import NewAccessoriesPage from "./pages/NewAccessoriesPage/NewAccessoriesPage";
import ProductViewDetails from "./pages/ProductViewDetails/ProductViewDetails";
import Cart from "./pages/Cart/Cart";


function App() {


  return (
    <>
      <Routes>
      <Route path="/"  element={<><Header /><Sliders/><Content/><Footer/></>}/>
      <Route path="/MoreSoldCategories" element={<><Header /><MoreSoldCategoryPage/><Footer/></>}/>
      <Route path="/NewProductsCategories" element={<><Header/><NewProductsCategoriesPage/><Footer/></>}/>
      <Route path="/NewAccessoriesCategories" element={<><Header /><NewAccessoriesPage/><Footer/></>}/>
      <Route path="/Cart" element={<><Header/><Cart/><Footer/></>} />
      <Route path="/ReturnPassword"  element={<><Header/><ReturnPassword /><Footer/></>}/>
      <Route exact path="/product-view/:id"  element={<><Header/><ProductViewDetails/><Footer/></>}/>
      <Route path="/About us"  element={<><Header/><AboutUs/><Footer/></>}/>
      <Route path="/Login"  element={<><Header/><Login/><Footer/></>}/>
      <Route path="/Authorization"  element={<><Header/><Authorization/><Footer/></>}/>
      <Route path="/FAQ" element={<><Header/><FAQ/><Footer/></>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
     
    </>
  );
}

export default App;
