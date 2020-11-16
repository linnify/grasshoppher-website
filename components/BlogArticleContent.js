import React from "react";

export const BlogArticleContent = ({ blockContent }) => {
  const markup = { __html: blockContent };
  return <div dangerouslySetInnerHTML={markup}></div>;
};


