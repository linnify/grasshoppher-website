import React from "react";

export const UnorderedList = ({ list }) => {

  const displayList = list.map((item, index) => {
    return( <li key={index} id={"unordered"}>{item}</li> );
  })

  return (
    <div>
      <ul>
        {displayList}
      </ul>
    </div>
  );
}