import React from "react";
import rating from "./assets/Group 743.png";
import styles from "./comment.module.css";
const Comment = () => {
  return (
    <div className={styles.comment_container}>
      <div className={styles.rate_section}>
        <span>4</span>
        <img className={styles.stars_img} src={rating} alt="" />
      </div>
      <div className={styles.user_comment_section}>
        <div className={styles.user_name}>
          Gunel Mammadova <span>5 gün əvvəl</span>
        </div>
        <div className={styles.product_info}>Yaddaş - 64, Rəng - Qara</div>
        <div className={styles.comment}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi mattis
          viverra lacus ut et, etiam. Vel ut in nunc nunc ut sit nibh tortor
          sit. Consectetur sit auctor odio quis suspendisse tincidunt quis. Et
          tristique amet aenean nibh porttitor quis aliquam integer. Consectetur
          lacus, volutpat malesuada libero. Sollicitudin libero pharetra a.
        </div>
      </div>
    </div>
  );
};

export default Comment;
