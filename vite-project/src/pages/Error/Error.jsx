import React from "react";
import ErrorPage from "./assets/Error.png";
import styles from "./error.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
const Error = () => {
const history=useNavigate()

  return (
    <div className={styles.error_fund}><div className={styles.error_conatiner}>
      <img className={styles.error_img} src={ErrorPage} alt="" />
      <span className={styles.error_text_404}>Error 404</span>
      <p className={styles.text_not_found}>Page was not found</p>
      <p><button onClick={()=>{history(-1)}} className={styles.button}>Go Back</button></p>
    </div></div>
  );
};

export default Error;
