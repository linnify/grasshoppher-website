import React from "react";
import {TextBoldKeyword} from "./TextBoldKeyword";

export const PageTitle = ({ content }) => {
  return(
    <div className={"container"} style={{marginTop: "180px"}}>
      <div className={"page-title"}>{content.title}</div>
      <TextBoldKeyword text={content}/>
    </div>
  );
}