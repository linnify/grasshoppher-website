import React from "react";
import styles from "./Values.module.scss"
import FadeInScroll from "../FadeInScroll/FadeInScroll";

export const Values = () => {
  return (
    <div className={"container"}>
      <div className={"middle-xs start-xs center-sm " + styles.values}>
        <FadeInScroll threshold={0.5}>
          <h1><b>We are courage, independence and good fortune.</b></h1>
        </FadeInScroll>
        <FadeInScroll threshold={0.6}>
          <h2 className={styles["values__text"]}>We have the ability to leap ridiculously far. (As in, 20 times our anatomical length, far.)</h2>
        </FadeInScroll>
        <FadeInScroll threshold={0.7}>
          <h2>We are GrasshoppHers.</h2>
        </FadeInScroll>
      </div>
    </div>
  );
}
