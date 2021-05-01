import React from "react";

export const PostContent = ({ content }) => {
  const markup = { __html: content };
  return <div dangerouslySetInnerHTML={markup}></div>;
};


