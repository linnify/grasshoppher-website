import React from "react";
import FadeInScroll from "./FadeInScroll/FadeInScroll";

export const TextStory = ({ content }) => {
  const displayStory = content.map((item, index) => {
    return <FadeInScroll><div key={index} style={{ paddingTop: "15px" }}>{item}</div></FadeInScroll>
  })

  return(displayStory);
}