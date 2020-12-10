import "../styles/main.scss";
import { DefaultSeo } from "next-seo";
import SEO from "../seo-metadata";
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import * as gtag from "../src/helpers/gtag";
import { hotjar } from "react-hotjar";
import { HOTJAR_SITE_ID } from "../constants/deploy"

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    hotjar.initialize(HOTJAR_SITE_ID, 6);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
