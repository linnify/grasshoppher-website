import React from "react";
import { NextSeo } from 'next-seo';

export default function Page(props) {

  const { title, description, url, type, author, tags, publishedDate, images_url, images_width, images_height } = props;

  return(
    <>
      <NextSeo
        title = {title || ""}
        description = {description || ""}
        openGraph = {{
          url: (url ||  ""),
          title: (title ||  ""),
          description: (description || ""),
          type: (type || ""), // variants: article
          article: {
            publishedTime: (publishedDate || ""),
            authors: [ (author || "") ],
            tags: [ (tags || "") ],
          },
          images: [{
            url: (images_url || ""),
            width:(images_width || ""),
            height: (images_height || ""),
          }],
        }}
      />
      {props.children}
    </>
  );
}