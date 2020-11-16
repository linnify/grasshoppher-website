import React from "react";
import {ButtonRedirect} from "../ButtonRedirect/ButtonRedirect";
import "./CollectionPost.module.scss";

export const CollectionPost = ({ post }) => {
  return(
    <div className={"col-xs-12 col-md-5 post"}>
      <img src={post.image} alt={post.title} className={"image post--image"}/>
      <div className={"post--title"} id={post.id}>{post.title}</div>
      <div className={"post--author"}>{post.author}</div>
      <div className={"post--description"}>{post.description}</div>
      <ButtonRedirect text={post.buttonText} href={post.buttonLink}/>
    </div>
  );
}