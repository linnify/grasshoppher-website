import React from "react";
import {SectionTitle} from "../SectionTitle";
import {limits} from "../../constants/landing";
import "./Limits.module.scss"

export const Limits = () => {
  return (
      <div className={"container limits__container"}>
        <img
          src={"landing/limits.jpg"}
          alt={"No limits description"}
          className={"image"}
        />
        <div className={"limits__text"}>
          <SectionTitle content={limits} light={"light"}/>
        </div>
      </div>
  );
}