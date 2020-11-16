import React from "react";

export const PostDate = ({ date }) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  const formatDate = new Intl.DateTimeFormat('en-US', options).format(
    new Date(date)
  );

  return <div>{formatDate}</div>;
};

