import React from "react";

export const PageTitle = ({content, id, style = {}}) => {
  return (
    <h1 id={id} style={style} className={'white-space-break'}>{content}</h1>
  );
}
