import React, { useState } from 'react'
import styles from "./app.module.css"
import Header from './components/Header/Header';
import Sliders from './components/Slider/Slider';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';


function App() {


  return (
    <>
      <Header />
      <Sliders />
      <Content />
      <Footer/>
    </>
  )
}

export default App
