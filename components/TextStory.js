import React from "react";

export const TextStory = ({ content }) => {
  const displayStory = content.map((item, index) => {
    return <div key={index} style={{ paddingTop: "15px" }}>{item}</div>
  })

  return(displayStory);
}