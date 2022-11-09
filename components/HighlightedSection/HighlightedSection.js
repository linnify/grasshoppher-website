import React from "react";
import styles from "./HighlightedSection.module.scss";
import { Parallax } from "react-scroll-parallax";

export const HighlightedSection = ({ words, alignment }) => {
  const displayWords = () => {
    return (
      <>
        {words.map((word, index) => (
          <div
            key={index}
            className={styles["highlighted-section--word"]}
            style={
              alignment === "right"
                ? { flexDirection: "row-reverse" }
                : { flexDirection: "row" }
            }
          >
            {word}
            <div
              className={styles["highlighted-section--divider"]}
              style={{ width: "100%" }}
            />
          </div>
        ))}
      </>
    );
  };

  return (
    <div className={styles["highlighted-section"]}>
      <div className={"container"}>
        <Parallax
          translateX={alignment === "left" ? [-80, 0] : [80, 0]}
          easing="easeOutExpo"
        >
          {displayWords()}
        </Parallax>
      </div>
    </div>
  );
};
