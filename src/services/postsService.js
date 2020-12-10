import React from "react";
import { BLOG_API_KEY, BLOG_HOST } from "../../constants/deploy";

const settings = {
  method: "GET",
  headers: {
    "x-api-token": BLOG_API_KEY,
    Accept: "application/json",
    "Content-Type": "application/json",
  },
};

export const getPostById = async (paramId) => {
  const response = await fetch(`${BLOG_HOST}/api/posts/${paramId}`, settings);
  return response.json();
};

export const getPosts = async () => {
  const response = await fetch(`${BLOG_HOST}/api/posts`, settings);
  return response.json();
};

export const getAllPosts = async () => {
  const response = await getPosts();
  const posts = response.results;
  let next = response.next;
  
  while (next) {
    const nextResponse = await fetch(next, settings);
    let nextResponseJson = await nextResponse.json();
    posts.push(...nextResponseJson.results);
    next = nextResponseJson.next;
  }
  
  return posts;
};
