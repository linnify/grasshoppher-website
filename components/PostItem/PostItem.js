import React from "react";
import {PostDate} from "../PostDate";
import styles from "./PostItem.module.scss";
import Link from "next/link";
import {ButtonRedirect} from "../ButtonRedirect";

export const PostItem = ({ post }) =>
  <Link href={`/blog/${post.slug}`}>
    <div className={styles.post}>
      <div className={styles["post--content"]}>
        <div className={styles["post--date"]}>
          <PostDate date={post.published_at}/>
        </div>
        <div className={styles["post--image"]}>
          <div className={styles["post--button"]}>
            <ButtonRedirect href={`/blog/${post.slug}`} text={"Read more"}/>
          </div>
          <img src={post.image?.url} />
        </div>
        <h2 className={styles["post--title"]}>{post.title}</h2>
        <div className={styles["post--summary"]}>{post.summary}</div>
        <div className={styles["post--source-info"]}>
          <div>{post.author.name}</div>
        </div>
      </div>
    </div>
  </Link>
