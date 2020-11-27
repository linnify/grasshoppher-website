import React from "react";
import {download} from "../../constants/landing";
import {SectionTitle} from "../SectionTitle";
import "./LandingDownload.module.scss"
import {DownloadButton} from "../DownloadButton";
import {handleOffset} from "../../src/helpers/handleOffset";
import {PageCircles} from "../PageCircles";

export const LandingDownload = () => {

  const offset = handleOffset(3450,0.3);

  return(
    <div className={"container download"}>
      <div className={"row bottom-xs between-md download--row"}>
        <div className={"col-xs-12 col-md-4 col-xl-5"}>
          <div style={{position: "relative", zIndex: "20"}}>
            <SectionTitle content={download}/>
            <DownloadButton/>
          </div>
        </div>
        <div className={"col-xs-12 col-md-7 col-xl-6"}>
          <div className={"circle"}>
            <PageCircles classes={"circle-base circle-download"} translateOffset={offset}/>
            <div style={{position: "relative"}}>
              <img src={"/landing/download-image.png"} className={"image download--img"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}