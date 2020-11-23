import React from "react";
import {PostDate} from "../PostDate";
import "./PostItem.module.scss";
import Link from "next/link";
import {ButtonRedirect} from "../ButtonRedirect/ButtonRedirect";

export const PostItem = ({ post }) => {

  return(
    <Link href={`/blog/${post.slug}`}>
      <div className={"post"}>
        <div className={"post--content"}>
          <div className={"post--date"}>
            <PostDate date={post.publishDate}/>
          </div>
          <div className={"post--image"}>
            <div className={"post--button"}>
              <ButtonRedirect href={`/blog/${post.slug}`} text={"Read more"}/>
            </div>
            <img src={post.image?.file} className={"image"}/>
          </div>
          <h2 className={"post--title"}>{post.title}</h2>
          <div className={"post--summary"}>{post.summary}</div>
          <div className={"post--source-info"}>
            <div>{post.author.name}</div>
            <div className={"post--source-info-delimiter"}>|</div>
            <div>{post.readTime} min. read</div>
          </div>
        </div>
      </div>
    </Link>
  );
}