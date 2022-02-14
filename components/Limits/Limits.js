import React from "react";
import {SectionTitle} from "../SectionTitle";
import {limits} from "../../constants/landing";
import styles from "./Limits.module.scss"
import {handleOffset} from "../../src/helpers/handleOffset";
import {PageCircles} from "../PageCircles";

export const Limits = () => {

  const offset = handleOffset(700,0.2);

  return (
    <div className={"container"} style={{position: "relative"}}>
      <PageCircles classes={"circle-base circle-limits"} translateOffset={offset}/>
      <div style={{position: "relative"}}>
        <div className={styles["limits__container"]}>
          <img
            src={"landing/limits.jpg"}
            alt={"No limits description"}
            className={"image"}
          />
          <div className={styles["limits__text"]}>
            <SectionTitle content={limits} light={"light"}/>
          </div>
        </div>
      </div>
    </div>
  );
}
