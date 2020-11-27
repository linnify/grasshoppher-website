import React from "react";
import {SectionTitle} from "./SectionTitle";
import {organizationList, organizations} from "../constants/partnerWithUs";
import {ButtonRedirect} from "./ButtonRedirect";
import {List} from "./List";
import {handleOffset} from "../src/helpers/handleOffset";
import {PageCircles} from "./PageCircles";

export const Organizations = () => {

  const offset = handleOffset(1000, 0.2)

  return(
    <div className={"container"} >
      <div className={"row middle-xs between-md mentorship--row padding-top-bottom-200"}>
        <div className={"col-xs-12 col-md-6 col-xl-5 organization--col"}>
          <SectionTitle content={organizations}/>
          <div className={"text-block"} style={{paddingTop: "0"}}>{organizations.listDescription}</div>
          <List list={organizationList}/>
          <div style={{paddingTop: "15px"}}>
            <ButtonRedirect text={organizations.buttonText} href={organizations.url} target={true}/>
          </div>
        </div>
        <div className={"col-xs-12 col-md-5 col-xl-6"}>
          <div className={"circle"}>
            <PageCircles classes={"circle-base circle-top-right"} translateOffset={offset}/>
            <div style={{position: "relative"}}>
              <img src={"/partner/organizations.png"} className={"image"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}