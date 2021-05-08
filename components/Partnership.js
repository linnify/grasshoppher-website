import React from "react";
import {handleOffset} from "../src/helpers/handleOffset";
import {NewPartnership} from "./NewPartnership/NewPartnership";
import {Partnerships} from "./Partnerships/Partnerships";

export const Partnership = ({ newPartnership, partners }) => {

  const offset = handleOffset(2368, 0.1);

  return(
    <div className={"container"}>
      <div className={"padding-top-bottom-50"}>
        <div style={{position: "relative"}}>
          <div className={"circle-base circle-instagram"} style={{ transform: `translateY(-${offset}px)`, zIndex: "-10px" }}>
            <span></span>
          </div>
          <div style={{position: "relative"}}>
            <div className={"section-title"}>Partnership</div>
          </div>
        </div>
        <NewPartnership partnership={newPartnership}/>
        <Partnerships partners={partners}/>
      </div>
    </div>
  )
}