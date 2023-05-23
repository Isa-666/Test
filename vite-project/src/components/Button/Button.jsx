import React from 'react'
import styles from "./button.module.css"
const Button = ({title, CustomClassButton, CustomClass}) => {
  return (
    <div className={CustomClassButton}><button className={CustomClass}>{title}</button></div>
  )
}

export default Button