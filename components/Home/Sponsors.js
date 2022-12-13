import React from "react";
import LogoSlider from "../LogoSlider/LogoSlider";
import { HighlightedText } from "../HighlightedText/HighlightedText";

export const Sponsors = ({ title, isArticle = false }) => {
  const logos = isArticle
    ? Array(3)
        .fill(null)
        .map(() => [
          {
            image: "/logos/Girlboss_Logo_Wordmark_Black_400x106.png",
            alt: "Girlboss",
            link:
              "https://girlboss.com/blogs/read/how-to-set-boundaries-as-a-boss",
          },

          {
            image: "/logos/forbes.png",
            alt: "Forbes",
            link:
              "https://www.forbes.com/sites/laureldonnellan/2022/08/16/this-24-year-old-entrepreneur-found-her-path-to-soul-work-without-a-college-degree/",
          },
          {
            image: "/logos/insider.png",
            alt: "Insider",
            link:
              "https://www.businessinsider.com/budget-template-how-much-entrepreneurs-small-businesses-spend-marketing-advertising-2022-7",
          },
          {
            image: "/logos/fox-7-austing.png",
            alt: "FOX 7 Austin",
            link: "https://www.fox7austin.com/video/1153051",
          },
        ])
        .flat()
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
