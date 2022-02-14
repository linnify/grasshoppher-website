import "../styles/main.global.scss";
import { DefaultSeo } from "next-seo";
import SEO from "../seo-metadata";
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import * as gtag from "../src/helpers/gtag";
import {SessionsBanner} from "../components/SessionsBanner/SessionsBanner";

const ROUTES_WITHOUT_BANNER = ['/terms', '/privacy-policy']

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const showBanner = !ROUTES_WITHOUT_BANNER.includes(router.asPath)
  
  return (
    <>
      <DefaultSeo {...SEO} />
      {showBanner && <SessionsBanner />}
      <Component {...pageProps} />
    </>
  );
}
