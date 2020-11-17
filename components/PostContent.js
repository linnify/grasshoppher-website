import React from "react";

export const PostContent = ({ blockContent }) => {
  const markup = { __html: blockContent };
  return <div dangerouslySetInnerHTML={markup}></div>;
};


