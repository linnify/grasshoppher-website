import React from "react";
import {handleOffset} from "../src/helpers/handleOffset";
import {PageCircles} from "./PageCircles";

export const ContactImage = () => {

  const offset = handleOffset(0, 0.3)

  return (
    <div className={"col-xs-12 col-md-5 col-xl-6 contact--col-img"}>
      <img src={"/images/contact.jpg"} className={"image contact--image"}/>
    </div>
  );
}