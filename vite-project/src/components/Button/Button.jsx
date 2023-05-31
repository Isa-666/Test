import React from 'react'

const Button = ({title, CustomClassButton, CustomClass}) => {
  return (
    <div className={CustomClassButton}><button className={CustomClass}>{title}</button></div>
  )
}

export default Button