import React from "react";
import {DownloadButton} from "../DownloadButton";
import {ButtonRedirect} from "../ButtonRedirect/ButtonRedirect";
import "./B2CDownloadSection.module.scss"

export const B2CDownloadSection = () => {
  return(
    <div className={"container"} style={{paddingTop: "100px", paddingBottom: "100px"}}>
      <div className={"row middle-xs between-md row-b2c"}>
        <div className={"col-xs-12 col-md-4 col-xl-5"}>
          <div className={"text-block"}>Do you want to join our GrasshoppHer Cloud (aka community)?</div>
          <DownloadButton/>
          <div className={"email-for-android"}>If you have an Android, email us at <b>hello@grasshoppher.com</b></div>
          <div className={"newsletter-container"}>
            <div className={"newsletter-text"}>Join the newsletter</div>
            <ButtonRedirect text={"Apply now"} href={"https://forms.gle/oqW8oVtrfxGj6avU7"} target={true}/>
          </div>
        </div>
        <div className={"col-xs-12 col-md-7 col-xl-6"}>
          <img src={"/landing/mobile-app.png"} className={"image download--img"} />
        </div>
      </div>
    </div>
  );
}