import React from "react";
import {ButtonRedirect} from "./ButtonRedirect";
import styled from "styled-components";

const Image = styled.div`
  background-image: url("${props => props.image}");
  background-size: contain;
  height: 400px;
  background-repeat: no-repeat;
  background-position-y: center;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`

export const PressItem = ({ post }) => {
  return(
    <div className={"col-xs-12 col-md-5 item"}>
      <img src={post.image} alt={post.title} className={"image item--image"}/>
      <div className={"item--title"} id={post.id}>{post.title}</div>
      <div className={"item--author"}>{post.author}</div>
      <div className={"item--description"}>{post.description}</div>
      <div style={{display: `${post.buttonText ? "initial" : "none"} `}}>
        <ButtonRedirect text={post.buttonText} href={post.buttonLink} target={true}/>
      </div>
    </div>
  );
}
