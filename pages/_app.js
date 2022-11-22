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
import Script from "next/script";

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
      Global Site Code Pixel - Facebook Pixel
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '795501494796536');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `   <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src="https://www.facebook.com/tr?id=795501494796536&ev=PageView&noscript=1"
        />`,
        }}
      />
      {/* Global Site Code Pixel - LinkedIn Pixel */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          _linkedin_partner_id = "4333228";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          (function(l) {
          if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
          window.lintrk.q=[]}
          var s = document.getElementsByTagName("script")[0];
          var b = document.createElement("script");
          b.type = "text/javascript";b.async = true;
          b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
          s.parentNode.insertBefore(b, s);})(window.lintrk);
          `,
        }}
      />
      <noscript
        dangerouslySetInnerHTML={{
          __html: ` 
        <img
          height="1"
          width="1"
          style="display:none;"
          alt=""
          src="https://px.ads.linkedin.com/collect/?pid=4333228&fmt=gif"
        />
      `,
        }}
      />
      <ThemeProvider theme={theme}>
        <DefaultSeo {...SEO} />
        <ParallaxProvider>
          <Component {...pageProps} />
        </ParallaxProvider>
      </ThemeProvider>
    </>
  );
}
