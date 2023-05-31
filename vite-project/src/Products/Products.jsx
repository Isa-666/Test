import React from 'react'
import CardProduct from '../components/CardProduct/CardProduct';

const Products = ({products}) => {
 
  return (
    <div>{products.map((product)=>(<div key={product.id}><CardProduct product={product}/></div>))}</div>
  )
}

export default Products;