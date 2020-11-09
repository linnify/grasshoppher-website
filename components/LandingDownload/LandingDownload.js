import React from "react";
import {download} from "../../constants/landingSectionDescriptions";
import {SectionTitle} from "../SectionTitle";
import "./LandingDownload.module.scss"
import {DownloadButton} from "./DownloadButton";

export const LandingDownload = () => {
  return(
    <div className={"container download"}>
      <div className={"row bottom-xs between-md download--row"}>
        <div className={"col-xs-12 col-md-4 col-xl-5"}>
          <SectionTitle content={download}/>
          <DownloadButton/>
        </div>
        <div className={"col-xs-12 col-md-7 col-xl-6"}>
          <img src={"/landing/download-image.png"} className={"image download--img"} />
        </div>
      </div>
    </div>
  );
}