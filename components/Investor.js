import React from "react";
import {investor} from "../constants/partnerWithUs";
import {SectionTitle} from "./SectionTitle";
import {ButtonRedirect} from "./ButtonRedirect";
import {handleOffset} from "../src/helpers/handleOffset";
import {PageCircles} from "./PageCircles";

export const Investor = () => {

  const offset = handleOffset(2000,0.2)

  return(
    <div className={"container"}>
      <div className={"circle"}>
        <PageCircles classes={"circle-base circle-top-right circle-investor"} translateOffset={offset}/>
        <div style={{position: "relative"}}>
          <div className={"relativeContainer padding-top-bottom-100"} style={{overflowX: "hidden"}}>
            <div className={"relativeContainer--text"} id={investor.id}>{investor.verticalText}</div>
            <img src={investor.imgSrc} className={"image"} alt={investor.verticalText} style={{marginLeft: "30px", display: "inline-block" }}/>
            <div className={"investor--description hide-xs show-lg"}>
              <div className={"investor--description-container"}>
                <SectionTitle content={investor}/>
                <ButtonRedirect text={investor.buttonText} href={investor.url} target={true}/>
              </div>
            </div>
          </div>
          <div className={"investor--description-mobile"}>
            <SectionTitle content={investor}/>
            <ButtonRedirect text={investor.buttonText} href={investor.url} target={true}/>
          </div>
        </div>
      </div>
    </div>
  );
}