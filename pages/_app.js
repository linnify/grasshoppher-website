import "../styles/main.scss";
import { DefaultSeo } from "next-seo";
import SEO from "../seo-metadata";
import React from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
