import React from "react";
import {List} from "./List";
import {listJoinGrassbassadors} from "../constants/grassbassadors";
import {ButtonRedirect} from "./ButtonRedirect";

export const JoinGrassbassadors = () => {
  return(
    <div className={"container"} id={"grassbassadors"} style={{ paddingBottom: "100px"}}>
      <div className={"relativeContainer"} style={{overflowX: "hidden"}}>
        <div className={"relativeContainer--text"} id={"grassbassadors"}>Join us</div>
        <img src={"/join-grassbassadors.jpg"} className={"image"} alt={"join grassbassadors"} style={{marginLeft: "35px", display: "inline-block" }}/>
        <div className={"grassbassadors--description hide-xs show-lg"}>
          <div style={{paddingRight: "50px"}}>
            <div className={"text-block"} style={{paddingTop: "0"}}>As a Grassbassador you will:</div>
            <List list={listJoinGrassbassadors}/>
            <div className={"text-block"} style={{display: "inline-block", paddingBottom: "0px"}}>Ready to leap?</div>
            <div style={{display: "inline-block", marginLeft: "30px"}}>
              <ButtonRedirect text={"Apply"}  href={"https://forms.gle/tJoj8DYXcTYSvH8Q7"} target={true}/>
            </div>
          </div>
        </div>
      </div>
      <div className={"show-xs hide-lg"}>
        <div className={"text-block"}>As a Grassbassador you will:</div>
        <List list={listJoinGrassbassadors}/>
        <div className={"text-block"} style={{ display: "inline-block"}}>Ready to leap?</div>
        <div style={{display: "inline-block", marginLeft: "30px"}}>
          <ButtonRedirect text={"Apply"} href={"https://forms.gle/tJoj8DYXcTYSvH8Q7"} target={true}/>
        </div>
      </div>
    </div>
  );
}

