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

export const getPostById = (paramId) => {
  return fetch(`${BLOG_HOST}/api/posts/${paramId}`, settings).then((response) =>
    response.json()
  );
};

export const getPosts = async () => {
  let response = await (await fetch(`${BLOG_HOST}/api/posts`, settings)).json();
  return response;
};

export const getAllPosts = async () => {
  let response = await (
    await fetch(`${BLOG_HOST}/api/posts`, settings)).json();
  const posts = response.results;
  let next = response.next;
  while (next) {
    let response = await (await fetch(next, settings)).json();
    posts.push(response.results);
    next = response.next;
  }
  return posts;
};