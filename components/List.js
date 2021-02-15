import React from "react";

export const List = ({list, itemStyle}) => {

  const applyBoldStyle = text => {
    let numberOfItemsAdded = 0;
    const result = text.itemText.split(/\{\d+\}/);
    text.boldText.forEach((boldText, i) => result.splice(++numberOfItemsAdded + i, 0, <div key={i} style={{fontWeight: 'bold', display: "inline"}}>{boldText}</div>));
    return <div>{result}</div>;
  };

  const displayList = list.map((item, index) => {
    return <li key={index} className={"list-item"} style={itemStyle} id={"section"}>{applyBoldStyle(item)}</li>
  })

  return(
    <ul>
      {displayList}
    </ul>
  );
}
