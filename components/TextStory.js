import React from "react";
import FadeInSection from "./FadeInSection/FadeInSection";

export const TextStory = ({ content }) => {
  const displayStory = content.map((item, index) => {
    return <FadeInSection><div key={index} style={{ paddingTop: "15px" }}>{item}</div></FadeInSection>
  })

  return(displayStory);
}