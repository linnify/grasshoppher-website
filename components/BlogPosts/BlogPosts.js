import React, {useEffect} from "react";
import {PostItem} from "../PostItem/PostItem";
import {resizeAllGridItems} from "../../src/helpers/resizeGridItem";

export const BlogPosts = ({ posts }) => {

  useEffect(() => {
    // TODO remove functions and use as in her cloud
    resizeAllGridItems();
    window.addEventListener("load", resizeAllGridItems)
    window.addEventListener("resize", resizeAllGridItems);
    return () => {
      window.removeEventListener('load', resizeAllGridItems)
      window.removeEventListener("resize", resizeAllGridItems);
    };
  });

  const displayPosts = posts.map((post, index) => <PostItem post={post} key={index}/>);

  return(
    <div className={"blog-post"}>
      {displayPosts}
    </div>
  );
}
