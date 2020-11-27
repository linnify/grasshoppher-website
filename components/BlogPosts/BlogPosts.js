import React, {useEffect} from "react";
import {PostItem} from "../PostItem/PostItem";
import "./BlogPosts.module.scss"
import {resizeAllGridItems} from "../../src/helpers/resizeGridItem";

export const BlogPosts = ({ posts }) => {

  useEffect(() => {
    resizeAllGridItems();
    window.onload = resizeAllGridItems;
    window.addEventListener("resize", resizeAllGridItems);
    return () => {
      window.removeEventListener("resize", resizeAllGridItems);
    };
  });

  const displayPosts = posts.map((post, index) => {
    return (<PostItem post={post} key={index}/>);
  });

  return(
    <div className={"blog-post"}>
      {displayPosts}
    </div>
  );
}