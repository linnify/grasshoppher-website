import React from "react";

export const TextBoldKeyword = ({ text, light }) => {
  const applyBoldStyle = text => {
    let numberOfItemsAdded = 0;
    const result = text.description.split(/\{\d+\}/);
    text.boldText.forEach((boldText, i) => result.splice(++numberOfItemsAdded + i, 0, <div key={i} style={{fontWeight: 'bold', display: "inline"}}>{boldText}</div>));
    return <div className={`text-block ${light}`}>{result}</div>;
  };
  return(
    <div>{applyBoldStyle(text)}</div>
  );
}