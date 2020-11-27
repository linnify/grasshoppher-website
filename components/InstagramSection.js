import React from "react";
import InstagramSlider from "./InstagramSlider/InstagramSlider";
import {handleOffset} from "../src/helpers/handleOffset";

export const InstagramSection = ({ feed }) => {

  const offset = handleOffset(768, 0.1);

  return(
    <div className={"container"}>
      <div style={{position: "relative"}}>
        <div className={"circle-base circle-instagram"} style={{ transform: `translateY(-${offset}px)`, zIndex: "-10px" }}>
          <span></span>
        </div>
        <div style={{position: "relative"}}>
          <div className={"section-title"}>This just happended.</div>
        </div>
      </div>
      <InstagramSlider feed={feed}/>
    </div>
  );
}