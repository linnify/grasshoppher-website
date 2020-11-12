import React from "react";
import {investor} from "../constants/partnerWithUs";
import {SectionTitle} from "./SectionTitle";
import {ButtonRedirect} from "./ButtonRedirect/ButtonRedirect";

export const Investor = () => {
  return(
    <div className={"container"}>
      <div className={"relativeContainer padding-top-bottom-100"} style={{overflowX: "hidden"}}>
        <div className={"relativeContainer--text"} id={investor.id}>{investor.verticalText}</div>
        <img src={investor.imgSrc} className={"image"} alt={investor.verticalText} style={{marginLeft: "30px", display: "inline-block" }}/>
        <div className={"investor--description hide-xs show-lg"}>
          <div className={"investor--description-container"}>
            <SectionTitle content={investor}/>
            <ButtonRedirect text={investor.buttonText} href={investor.url}/>
          </div>
        </div>
      </div>
      <div className={"investor--description-mobile"}>
        <SectionTitle content={investor}/>
        <ButtonRedirect text={investor.buttonText} href={investor.url}/>
      </div>
    </div>
  );
}