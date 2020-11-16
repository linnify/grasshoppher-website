import React from "react";
import {CollectionPost} from "./CollectionPost/CollectionPost";

export const Collections = ({ posts }) => {

  const onDisplayPosts = posts.map((post, index) => {
    return <CollectionPost post={post} key={index}/>
  })

  return (
    <div className={"row around-md"}>
      {onDisplayPosts}
    </div>
  );
}