import React from "react";
import {SectionTitle} from "../SectionTitle";
import {limits} from "../../constants/landing";
import "./Limits.module.scss"
import {handleOffset} from "../../src/helpers/handleOffset";
import {ThreeCircles} from "../ThreeCircles";

export const Limits = () => {

  const offset = handleOffset(700,0.2);

  return (
    <div className={"container"} style={{position: "relative"}}>
      <ThreeCircles classes={"circle-base circle-limits"} translateOffset={offset}/>
      <div style={{position: "relative"}}>
        <div className={"limits__container"}>
          <img
            src={"landing/limits.jpg"}
            alt={"No limits description"}
            className={"image"}
          />
          <div className={"limits__text"}>
            <SectionTitle content={limits} light={"light"}/>
          </div>
        </div>
      </div>
    </div>
  );
}