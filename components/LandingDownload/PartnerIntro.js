import React from "react";
import {SectionTitle} from "../SectionTitle";
import {partner} from "../../constants/partnerWithUs";

export const PartnerIntro = () => {
  return(
    <div className={"container"} style={{paddingTop: "100px", paddingBottom: "130px"}}>
      <div className={"page-title"}>Partner with Us</div>
      <div className={"row middle-xs between-md mentorship--row partner--row"}>
        <div className={"col-xs-12 col-md-6 col-xl-6"}>
          <div className={"title-box"}>
            <SectionTitle content={partner}/>
          </div>
          <div className={"text-block"}>{partner.spiritDescription}<span style={{color: "#F5CAC4"}}>{partner.spiritDescriptionSpan}</span></div>
        </div>
        <div className={"col-xs-12 col-md-5 col-xl-5"}>
          <img src={"/partner/intro.png"} className={"image"}/>
        </div>
      </div>
    </div>
  );
}