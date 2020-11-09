import React from "react";
import {TextBoldKeyword} from "./TextBoldKeyword";

export const SectionTitle = ({ content, light }) => {
  return(
    <div>
      <div className={`section-title ${light}`}>{content.title}</div>
      <TextBoldKeyword text={content} light={light}/>
    </div>
  );
}