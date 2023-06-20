import { HeroLayout } from "../../HeroLayout/HeroLayout";
import { PageTitle } from "../../PageTitle";
import React from "react";
import { HighlightedText } from "../../HighlightedText/HighlightedText";
import styles from "./StoryHero.module.scss";
import { Parallax } from "react-scroll-parallax";

export const StoryHero = () => {
  return (
    <HeroLayout backgroundSrc={"/backgrounds/story-hero.svg"}>
      <div className={`container ${styles["story-hero"]}`}>
        <div className={styles["story-hero__content"]}>
          <PageTitle content={"About\nus"} />
          <div className={`${styles["story-hero__text"]}`}>
            <HighlightedText
              text={
                "GrasshoppHer is your one-stop-shop for reaching your money goals. We offer financial knowledge and community for women to empower you to reach your fullest, brightest potential."
              }
            />
            <h3 className={`${styles["story-hero__content__subtitle"]}`}>
              At GrasshoppHer, we recognize the important role financial
              know-how plays in your life. By developing a deep understanding of
              financial concepts and strategies, you gain the necessary tools to
              make bold decisions and unlock a world of opportunities. With
              GrasshoppHer, you'll discover the power within you to leap beyond
              boundaries and achieve your wildest dreams.
            </h3>
          </div>
        </div>
        <div className={styles["story-hero__image"]}>
          <Parallax speed={8}>
            <img src={"/images/story-hero.png"} />
          </Parallax>
        </div>
      </div>
    </HeroLayout>
  );
};
