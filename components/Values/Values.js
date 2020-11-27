import React from "react";
import "./Values.module.scss"
import FadeInScroll from "../FadeInScroll/FadeInScroll";

export const Values = () => {
  return (
    <div className={"container"}>
      <div className={"middle-xs start-xs center-sm values"}>
        <FadeInScroll threshold={0.3}>
          <h1><b>We are courage, independence and good fortune.</b></h1>
        </FadeInScroll>
        <FadeInScroll threshold={0.4}>
          <h2 className={"values__text"}>We have the ability to leap ridiculously far. (As in, 20 times our anatomical length, far.)</h2>
        </FadeInScroll>
        <FadeInScroll threshold={0.5}>
          <h2>We are GrasshoppHers.</h2>
        </FadeInScroll>
      </div>
    </div>
  );
}