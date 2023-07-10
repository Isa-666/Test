import React from 'react'
import styles from "./SearchResultList.module.css"
import SearchResults from '../SearchResults/SearchResults'
const SearchResultList = ({results, handleChange}) => {
  return (
    <div className={styles.results_container}>
      
{results.map((product)=>{ 
    return <div className={styles.SearchResultsAnimation} key={product.id}><SearchResults handleChange={handleChange} product={product}/></div>
})}</div>
  )
}

export default SearchResultList