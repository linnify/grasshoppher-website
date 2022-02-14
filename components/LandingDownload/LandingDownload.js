import React from "react";
import {download} from "../../constants/landing";
import {SectionTitle} from "../SectionTitle";
import styles from "./LandingDownload.module.scss"
import {DownloadButton} from "../DownloadButton";
import {handleOffset} from "../../src/helpers/handleOffset";
import {PageCircles} from "../PageCircles";
import {ButtonRedirect} from "../ButtonRedirect";

export const LandingDownload = () => {

  const offset = handleOffset(3450,0.3);

  return(
    <div className={"container " + styles.download}>
      <div className={"row bottom-xs between-md " + styles['download--row']}>
        <div className={"col-xs-12 col-md-4 col-xl-5"}>
          <div style={{position: "relative", zIndex: "20"}}>
            <SectionTitle content={download}/>
            <DownloadButton/>
            <div className={"newsletter-container"}>
              <div className={"newsletter-text"}>Want our newsletter?</div>
              <ButtonRedirect text={"Sign up"} href={"https://forms.gle/oqW8oVtrfxGj6avU7"} target={true}/>
            </div>
          </div>
        </div>
        <div className={"col-xs-12 col-md-7 col-xl-6"}>
          <div className={"circle"}>
            <PageCircles classes={"circle-base circle-download"} translateOffset={offset}/>
            <div style={{position: "relative"}}>
              <img src={"/landing/download-image.png"} className={"image " + styles['download--img']} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
