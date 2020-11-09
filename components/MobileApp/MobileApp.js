import React from "react";
import {app, appList} from "../../constants/landingSectionDescriptions";
import {SectionTitle} from "../SectionTitle";
import "./MobileApp.module.scss"
import {List} from "../List";

export const MobileApp = () => {
  return(
    <div className={"container mobile-app"}>
      <div className={"row start-xs between-md"}>
        <div className={"col-xs-12 col-md-5 col-xl-6"}>
          <img src={"/landing/mobile-app.png"} className={"image"}/>
        </div>
        <div className={"col-xs-12 col-md-6 col-xl-5 mobile-app--title"}>
          <SectionTitle content={app}/>
          <List list={appList} />
        </div>
      </div>
    </div>
  );
}