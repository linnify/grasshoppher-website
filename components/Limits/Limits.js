import React from "react";
import {SectionTitle} from "../SectionTitle";
import {limits} from "../../constants/landingSectionDescriptions";
import "./Limits.module.scss"

export const Limits = () => {
  return (
      <div className={"container limits__container"}>
        <img src={"landing/limits.png"} alt={"No limits description"}/>
        <div className={"limits__text"}>
          <SectionTitle content={limits} light={"light"}/>
        </div>
      </div>
  );
}