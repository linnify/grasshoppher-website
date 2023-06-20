import React from "react";
import { BigText } from "../../BigText";
import { HighlightedText } from "../../HighlightedText/HighlightedText";
import { RedirectButton } from "../../RedirectButton";
import styles from "./HomeProblemStatement.module.scss";
import { Parallax } from "react-scroll-parallax";

export const HomeProblemStatement = () => {
  return (
    <div
      className={`container padding-top-bottom-100 ${styles["problem-statement"]}`}
    >
      <div
        className={`${styles["problem-statement--align-end"]} ${styles["problem-statement__brave"]}`}
      >
        <Parallax speed={10} translateY={[20, -40]}>
          <BigText text={"Brave"} />
        </Parallax>
      </div>
      <HighlightedText
        text={
          "GrasshoppHer is your one-stop-shop for reaching your money goals. We offer financial knowledge and community for women to empower you to reach your fullest, brightest potential."
        }
      />
      <div
        className={styles["problem-statement__section"]}
        style={{ width: "100%" }}
      >
        <div
          className={`col start-xs ${styles["problem-statement__section-title"]}`}
        >
          <h3>
            Life is expensive and adulting is hard. We know that many of you
            worry about the rising costs of living and having to put off life
            milestones.
          </h3>
          <div
            className={`inter1 ${styles["problem-statement__section-subtitle"]}`}
          >
            At Grasshoppher, our mission is to empower you to build long-term
            wealth and opportunities. We understand that you face unique
            challenges and barriers, but equipped with financial knowledge and
            the right tools, you can unlock your full potential. Money
            empowerment is key to your overall well-being and independence.
            We’ll help you set that ripple effect into motion to grow your
            money, life and dreams.
          </div>
          {/*<RedirectButton*/}
          {/*  href={"/membership-landing"}*/}
          {/*  target={false}*/}
          {/*  label={"Join now"}*/}
          {/*/>*/}
        </div>
        <div className={styles["problem-statement--align-end"]}>
          <Parallax speed={10} translateY={[60, -20]}>
            <BigText text={"Bold"} />
          </Parallax>
        </div>
      </div>
      <div
        className={`margin-top-xl ${styles["problem-statement--align-end"]}`}
      >
        <Parallax speed={10} translateY={[50, -10]}>
          <p className={`big-text ${styles["big-text"]}`}>Boundless</p>
        </Parallax>
      </div>
    </div>
  );
};
