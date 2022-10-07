import React from "react";
import styles from "./EBook.module.scss";
import { PageTitle } from "../PageTitle";
import { RedirectButton } from "../RedirectButton";
import { Parallax } from "react-scroll-parallax";

export const EBook = ({
  disableAnimation = false,
  displayBigText = false,
  title,
  description,
  buttonTitle,
  imageUrl,
  buttonLink,
}) => {
  return (
    <div className={`container ${styles["ebook"]}`}>
      {displayBigText && (
        <div className={`${styles["big-text"]}`}>
          <Parallax speed={10} translateY={[20, -140]}>
            <p className={`big-text`}>Boundless</p>
          </Parallax>
        </div>
      )}
      <div className={styles["ebook__content"]} id={"ebook-content"}>
        <PageTitle
          content={
            title || "Up your\ngame.\nLand\nthe job.\nBe your\nown\nboss."
          }
        />
        <div className={styles["ebook__subtitle"]}>
          <div className={`${styles["ebook__text"]} inter1`}>
            {description ||
              "Get leveling up tips and tricks to up your professional brand."}
          </div>
        </div>
        <RedirectButton
          label={buttonTitle || "Get your free\ndownloadable ebook"}
          target={true}
          href={
            buttonLink ||
            "https://docs.google.com/forms/d/e/1FAIpQLSfXz9_t_2_MKgPs4v1ubPiPyeIxbrV9A1BXgVouthXuOCO8hg/viewform"
          }
        />
      </div>
      <div className={styles["ebook__image"]} id={"ebook-content__image"}>
        <Parallax
          disabled={disableAnimation}
          translateX={[20, 0]}
          easing="easeOutCirc"
        >
          <img src={imageUrl || "/images/impact.png"} />
        </Parallax>
      </div>
    </div>
  );
};
