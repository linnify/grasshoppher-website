import React from "react";
import InstagramSlider from "./InstagramSlider/InstagramSlider";

export const InstagramSection = ({ feed }) => {

  return(
    <div className={"container"}>
      <div className={"section-title"}>This just happended.</div>
      <InstagramSlider feed={feed}/>
    </div>
  );
}