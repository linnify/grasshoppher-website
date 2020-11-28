import React from "react";
import {SectionTitle} from "./SectionTitle";
import {partner} from "../constants/partnerWithUs";
import {handleOffset} from "../src/helpers/handleOffset";
import {PageCircles} from "./PageCircles";

export const PartnerIntro = () => {

  const offset = handleOffset(0, 0.2)

  return(
    <div className={"container"} style={{paddingTop: "100px", paddingBottom: "130px"}}>
      <div className={"page-title"}>Partner with Us</div>
      <div className={"row middle-xs between-md mentorship--row partner--row"}>
        <div className={"col-xs-12 col-md-6 col-xl-6"}>
          <div className={"title-box"}>
            <SectionTitle content={partner}/>
          </div>
          <div className={"text-block"}>{partner.spiritDescription}
            <a href={"https://forms.gle/ppU2EMdMxR5go8SD9"} target={"_blank"} style={{textDecoration: "none"}}>
              <span style={{color: "#F5CAC4"}}>{partner.spiritDescriptionSpan}</span>
            </a>
          </div>
        </div>
        <div className={"col-xs-12 col-md-5 col-xl-5"}>
          <div className={"circle"}>
            <PageCircles classes={"circle-base circle-top-right circle-story-photo"} translateOffset={offset}/>
            <div style={{position: "relative"}}>
              <img src={"/partner/intro.png"} className={"image"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}