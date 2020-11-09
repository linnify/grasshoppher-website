import React from "react";

export const ImageAndVerticalText = ({ text, imgSrc }) => {
  return(
    <div className={"relativeContainer"}>
      <div className={"relativeContainer--text"}>{text}</div>
      <img src={imgSrc} className={"image"}/>
    </div>
  );
}