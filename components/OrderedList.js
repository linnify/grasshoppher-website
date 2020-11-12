import React from "react";

export const OrderedList = ({ list }) => {

  const displayList = list.map((item, index) => {
    return( <li key={index} id={"ordered"}>{item}</li> );
  })

  return (
    <ol >
      {displayList}
    </ol>
  );
}