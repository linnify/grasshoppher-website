import { HighlightedText } from "../../HighlightedText/HighlightedText";
import styles from "./EventsHeader.module.scss";
import React from "react";
import { RedirectButton } from "../../RedirectButton";

export const EventsHeader = ({
  title,
  description,
  buttonTitle,
  buttonLink,
}) => {
  return (
    <div className={`${styles["events-header"]}`}>
      <div className={`${styles["events-header__container"]}`}>
        <HighlightedText text={title} />
        {!!(buttonTitle && buttonLink) && (
          <RedirectButton
            label={buttonTitle}
            target={false}
            href={buttonLink}
            color={"white"}
          />
        )}
      </div>
      <div className={`inter1 ${styles["events-header__text"]}`}>
        {description}
      </div>
    </div>
  );
};
