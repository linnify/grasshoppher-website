import React, { useEffect } from "react";
import { PostItem } from "../PostItem/PostItem";
import { resizeAllGridItems } from "../../src/helpers/resizeGridItem";
import { RedirectButton } from "../RedirectButton";

export const BlogPosts = (props) => {
  const displayPosts = props.posts.map((post, index) => (
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
    }, 250);

    return () => {
      window.removeEventListener("load", resizeAllGridItems);
      window.removeEventListener("resize", resizeAllGridItems);
      window.removeEventListener("scroll", resizeAllGridItems);
      clearInterval(myTimeout);
    };
  }, [props.posts]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className={"blog-post"}>{displayPosts}</div>
      {props.hasMore && (
        <div style={{ marginBottom: "32px" }}>
          <RedirectButton
            label={"Load more articles"}
            asButton={true}
            onClick={props.onLoadMore}
          />
        </div>
      )}
    </div>
  );
};
