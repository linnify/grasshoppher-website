import React from "react";
import styles from "./EBook.module.scss";
import { PageTitle } from "../PageTitle";
import { RedirectButton } from "../RedirectButton";
import { Parallax } from "react-scroll-parallax";

export const EBook = ({ disableAnimation = false }) => {
  return (
    <div className={`container ${styles["ebook"]}`}>
      <div className={styles["ebook__content"]} id={"ebook-content"}>
        <PageTitle
          content={"Up your\ngame.\nLand\nthe job.\nBe your\nown\nboss."}
        />
        <div className={styles["ebook__subtitle"]}>
          <div className={`${styles["ebook__text"]} inter1`}>
            Get leveling up tips and tricks to up your professional brand.
          </div>
        </div>
        <RedirectButton
          label={"Get your free\ndownloadable ebook"}
          target={true}
          href={
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
          <img src={"/images/impact.png"} />
        </Parallax>
      </div>
    </div>
  );
};
