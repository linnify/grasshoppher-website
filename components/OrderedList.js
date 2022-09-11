import React from "react";

export const OrderedList = ({ list }) => {

  const displayList = list.map((item, index) => {
    return( <li key={index}>{item}</li> );
  })

  return (
    <ol >
      {displayList}
    </ol>
  );
}