import React from "react";
import {ButtonRedirect} from "./ButtonRedirect/ButtonRedirect";

export const EventItem = ({ post }) => {
  return(
    <div className={"col-xs-12 col-md-5 item"}>
      <img src={post.image} alt={post.title} className={"image item--image"}/>
      <div className={"item--title"} id={post.id}>{post.title}</div>
      <div className={"item--description"}>{post.description}</div>
      <ButtonRedirect text={post.buttonText} href={post.buttonLink} target={true}/>
    </div>
  );
}