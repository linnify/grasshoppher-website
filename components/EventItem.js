import React from "react";
import {ButtonRedirect} from "./ButtonRedirect";

export const EventItem = ({ post }) => {

  const id = post.disabled ? 'disabled' : ''
  return(
    <div className={"col-xs-12 col-md-5 item"}>
      <img src={post.image?.url} alt={post.title} className={"image item--image"}/>
      <div className={"item--title"} id={post.id}>{post.title}</div>
      <div className={"item--description"}>{post.description}</div>
      <ButtonRedirect
        text={post.button_text} href={post.button_link} target={!post.disabled} id={id}/>
    </div>
  );
}
