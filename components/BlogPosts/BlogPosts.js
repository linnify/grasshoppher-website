import React, { useEffect } from "react";
import { PostItem } from "../PostItem/PostItem";
import { resizeAllGridItems } from "../../src/helpers/resizeGridItem";

export const BlogPosts = ({ posts }) => {
  const displayPosts = posts.map((post, index) => (
    <PostItem post={post} key={index} />
  ));

  useEffect(() => {
    // TODO remove functions and use as in her cloud
    resizeAllGridItems();
    window.addEventListener("load", resizeAllGridItems);
    window.addEventListener("resize", resizeAllGridItems);
    window.addEventListener("scroll", resizeAllGridItems);
    const myTimeout = setTimeout(() => {
      resizeAllGridItems();
    }, 100);

    return () => {
      window.removeEventListener("load", resizeAllGridItems);
      window.removeEventListener("resize", resizeAllGridItems);
      window.removeEventListener("scroll", resizeAllGridItems);
      clearInterval(myTimeout);
    };
  }, []);

  return <div className={"blog-post"}>{displayPosts}</div>;
};
