import React from "react";
import {firstPerk, perks} from "../../constants/b2c";
import styles from "./Perks.module.scss";
import {handleOffset} from "../../src/helpers/handleOffset";
import {PageCircles} from "../PageCircles";

export const Perks = () => {

  const offset = handleOffset(540, 0.2);

  const displayPerks = perks.map((perk, index) => {
    return (
      <div key={index} className={"col-xs-12 col-sm-6 col-lg-3 perks__col"}>
        <img src={perk.icon} alt={perk.title} className={"image"}/>
        <div className={"perks__title"}>{perk.title}</div>
        <div className={"perks__description"}>{perk.description}</div>
      </div>
    );
  })

  return (
    <div className={"container " + styles.perks} >
      <div className={"circle"}>
        <PageCircles classes={"circle-base circle-top-right circle-perks"} translateOffset={offset}/>
        <div className={"row between-sm"} style={{position: "relative"}}>
          <div className={"col-xs-12 col-sm-6 col-lg-3 " + styles["perks__col"]}>
            <div className={styles["perks__first"]}>
              <div className={styles["perks__first__vertical-text"]}>{firstPerk.verticalText}</div>
              <img src={firstPerk.icon} alt={firstPerk.title} className={"image"}/>
            </div>
            <div className={styles["perks__title"]}>{firstPerk.title}</div>
            <div className={styles["perks__description"]}>{firstPerk.description}</div>
          </div>
          {displayPerks}
        </div>
      </div>
    </div>
  );
}
