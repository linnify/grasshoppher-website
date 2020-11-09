import React from "react";
import {firstPerk, perks} from "../../constants/b2c";
import "./Perks.module.scss";

export const Perks = () => {

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
    <div className={"container perks"} >
      <div className={"row between-sm"}>
        <div className={"col-xs-12 col-sm-6 col-lg-3 perks__col"}>
          <div className={"perks__first"}>
            <div className={"perks__first__vertical-text"}>{firstPerk.verticalText}</div>
            <img src={firstPerk.icon} alt={firstPerk.title} className={"image"}/>
          </div>
          <div className={"perks__title"}>{firstPerk.title}</div>
          <div className={"perks__description"}>{firstPerk.description}</div>
        </div>
        {displayPerks}
      </div>
    </div>
  );
}