import "../styles/main.global.scss";
import { DefaultSeo } from "next-seo";
import SEO from "../seo-metadata";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "../src/helpers/gtag";
import { ParallaxProvider } from "react-scroll-parallax";
import { ThemeProvider } from "@material-ui/core";
import theme from "../src/theme";
import "swiper/swiper-bundle.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";

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

  return (
    <>
      <ThemeProvider theme={theme}>
        <DefaultSeo {...SEO} />
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </ThemeProvider>
    </>
  );
}
