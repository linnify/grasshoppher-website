import "../styles/main.scss";
import { DefaultSeo } from "next-seo";
import React from "react";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo
        title="GrasshoppHers"
        description="We are courage, independence and good fortune."
        canonical="#"
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "3",
          site_name: "GrasshoppHers",
          title: "GrasshoppHers",
          description: "We are courage, independence and good fortune.",
        }}
        twitter={{
          site: "@grasshopphers",
          cardType: "summary",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
