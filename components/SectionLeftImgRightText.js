import React from "react";
import {SectionTitle} from "./SectionTitle";
import {ButtonRedirect} from "./ButtonRedirect";


export const SectionLeftImgRightText = ({ section }) => {
  return(
    <div className={"container"} style={{ background: "rgba(0,0,0,0)" }}>
      <div className={"row middle-xs between-md padding-top-bottom-50"}>
        <div className={"col-xs-12 col-md-5 col-xl-6"} style={{ zIndex: "15"}}>
          <img src={section.imgSrc} className={"image"}/>
        </div>
        <div className={"col-xs-12 col-md-6 col-xl-5 padding-top-bottom-50"} style={{ zIndex: "15"}}>
          <SectionTitle content={section} id={section.id}/>
          <ButtonRedirect text={section.buttonText} href={section.url} target={section.target}/>
        </div>
      </div>
    </div>
  );
}