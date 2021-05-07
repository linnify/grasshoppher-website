import React from "react";
import {ButtonRedirect} from "./ButtonRedirect";

export const DownloadButton = () => (
  <div className={"button-download"}>
    <div className={'button-download--text'}>Find Mentorship</div>
    <ButtonRedirect text={"Log in"} href={"https://www.grasshoppherapp.com/signup"} target={true}/>
  </div>
)
