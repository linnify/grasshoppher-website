import React from "react";
import "./Values.module.scss"
import FadeInSection from "../FadeInSection/FadeInSection";

export const Values = () => {
  return (
    <div className={"container"}>
      <div className={"middle-xs start-xs center-sm values"}>
        <FadeInSection threshold={0.3}>
          <h1><b>We are courage, independence and good fortune.</b></h1>
        </FadeInSection>
        <FadeInSection threshold={0.4}>
          <h2 className={"values__text"}>We have the ability to leap ridiculously far. (As in, 20 times our anatomical length, far.)</h2>
        </FadeInSection>
        <FadeInSection threshold={0.5}>
          <h2>We are GrasshoppHers.</h2>
        </FadeInSection>
      </div>
    </div>
  );
}