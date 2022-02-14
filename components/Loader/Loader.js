import React from "react";
import styles from "./Loader.module.scss"

export const Loader = () => {
  return(
    <div className={styles["page-loader"]}>
      <div className={styles["lds-default"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
