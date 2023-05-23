import React from 'react'
import styles from "./footerarticles.module.css"
const FooterArticle = ({ title, text, image }) => {
    return (
        <div className={styles.footer_article_container}>
            <div><img src={image} alt="" /></div>
           <div className={styles.info_container}> <div className={styles.title}>{title}</div>
            <div className={styles.text}>{text}</div></div>
        </div>
    )
}

export default FooterArticle