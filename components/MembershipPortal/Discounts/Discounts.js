import { HighlightedText } from "../../HighlightedText/HighlightedText";
import React from "react";
import { DiscountSlider } from "../DiscountSlider/DiscountSlider";
import styles from "../Events/Events.module.scss";
import { Parallax } from "react-scroll-parallax";
import { BigText } from "../../BigText";

export const Discounts = ({ discounts, virtual }) => {
  const getDiscounts = () => {
    if (virtual) {
      return discounts.filter((discount) => discount.virtual);
    }
    return discounts;
  };
  return (
    <>
      <div className={"container"} style={{ position: "relative" }}>
        <HighlightedText text={"Perks & Discounts"} />
        <div className={`${styles["big-text"]}`}>
          <Parallax speed={10} translateY={[20, -180]}>
            <BigText text={"Bold"} />
          </Parallax>
        </div>
      </div>

      <DiscountSlider discounts={getDiscounts()} />
    </>
  );
};
