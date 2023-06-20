import React from "react";
import styles from "./HomeWhatYouWillGet.module.scss";
import { HighlightedSection } from "../../HighlightedSection/HighlightedSection";

export const HomeWhatYouWillGet = () => {
  return (
    <div className={"col start-xs padding-top-bottom-100"}>
      <h3 className={`container`}>What you'll get</h3>
      <div className={styles["what-you-will-get--sections"]}>
        <HighlightedSection
          words={["Money", "tips", "and", "tricks"]}
          alignment={"left"}
        />
        <HighlightedSection
          words={["Community", "Building"]}
          alignment={"right"}
        />
        <HighlightedSection
          words={["Thought", "Leadership"]}
          alignment={"left"}
        />
        <HighlightedSection
          words={["Financial", "empowerment", "summits"]}
          alignment={"right"}
        />
      </div>
    </div>
  );
};
