import React from "react";
import {SectionTitle} from "../SectionTitle";
import {mentorship} from "../../constants/landingSectionDescriptions";
import {ButtonRedirect} from "../ButtonRedirect/ButtonRedirect";
import "./Mentorship.module.scss";

export const Mentorship = () => {
  return(
    <div className={"container mentorship"}>
      <div className={"row middle-xs between-md mentorship--row"}>
        <div className={"col-xs-12 col-md-6 col-xl-5"}>
          <SectionTitle content={mentorship}/>
          <ButtonRedirect href={mentorship.url} text={mentorship.buttonText}/>
        </div>
        <div className={"col-xs-12 col-md-5 col-xl-6"}>
          <img src={"/landing/mentorship.png"} className={"image mentorship--img"}/>
        </div>
      </div>
    </div>
  );
}