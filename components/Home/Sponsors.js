import React from "react";
import LogoSlider from "../LogoSlider/LogoSlider";
import { HighlightedText } from "../HighlightedText/HighlightedText";

export const Sponsors = ({ title, isArticle = false }) => {
  const logos = isArticle
    ? [
        {
          image: "/logos/Girlboss_Logo_Wordmark_Black_400x106.png",
          alt: "Girlboss",
          link:
            "https://girlboss.com/blogs/read/how-to-set-boundaries-as-a-boss",
        },
      ]
    : Array(3)
        .fill(null)
        .map(() => [
          {
            image: "/logos/boxt-logo.svg",
            alt: "BOXT",
          },
          {
            image: "/logos/uconn-logo.svg",
            alt: "UCONN",
          },
          {
            image: "/logos/99d-logo.svg",
            alt: "99d",
          },
          {
            image: "/logos/central-university-logo.svg",
            alt: "Central University",
          },
          {
            image: "/logos/ziki-logo.png",
            alt: "Ziki",
          },
        ])
        .flat();

  return (
    <>
      <div className={"container"}>
        <HighlightedText text={title || "Proud partners"} />
      </div>
      <LogoSlider logos={logos} isArticle={isArticle} />
    </>
  );
};
