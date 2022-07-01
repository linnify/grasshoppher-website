import React from "react";
import {TextBoldKeyword} from "./TextBoldKeyword";
import handleScroll from "../src/hooks/handleScroll";
import {handleOffset} from "../src/helpers/handleOffset";

export const PageTitle = ({ content, id }) => {

  const offset = handleOffset(0, 0.2);

  return(
    <div className={"container page-title-container"}>
      <div className={"circle"}>
        <div className={"circle-base circle-one circle-page-title"} id={id} style={{ transform: `translateY(-${offset}px)`}}>
          <span></span>
        </div>
        <div style={{position: "relative", zIndex: "30!important"}}>
          <div className={"page-title"}>{content}</div>
        </div>
      </div>
    </div>
  );
}
