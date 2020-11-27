import React from "react";
import {handleOffset} from "../src/helpers/handleOffset";
import {ThreeCircles} from "./ThreeCircles";

export const ContactImage = () => {

  const offset = handleOffset(0, 0.3)

  return(
    <div className={"col-xs-12 col-md-5 col-xl-6 contact--col-img"}>
      <div className={"circle"}>
        <ThreeCircles classes={"circle-top-right circle-story-photo"} translateOffset={offset}/>
        <div style={{position: "relative"}}>
          <img src={"/contact.png"} className={"image contact--image"}/>
        </div>
      </div>
    </div>
  );
}