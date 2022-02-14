import React from "react";
import {DownloadButton} from "../DownloadButton";
import styles from "./B2CDownloadSection.module.scss"

export const B2CDownloadSection = () => (
    <div className={"container"} style={{paddingTop: "100px", paddingBottom: "100px"}}>
      <div className={"row middle-xs between-md " + styles['row-b2c']}>
        <div className={"col-xs-12 col-md-4 col-xl-5"}>
          <div className={"text-block"}>Do you want to join our GrasshoppHer Cloud (aka community)?</div>
          <DownloadButton/>
        </div>
        <div className={"col-xs-12 col-md-7 col-xl-6"}>
          <img src={"/landing/mobile-app.png"} className={"image download--img"} />
        </div>
      </div>
    </div>
)
