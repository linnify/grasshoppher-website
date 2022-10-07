import React from "react";
import Marquee from "react-marquee-master";
import { DiscountCard } from "../DiscountCard/DiscountCard";

export const DiscountSlider = ({ discounts }) => {
  const onDisplayDiscounts = discounts.map((discount, index) => (
    <DiscountCard discount={discount} index={index} />
  ));

  return (
    <div className={"row"}>
      <div className={`marquee--container`}>
        <Marquee
          marqueeItems={onDisplayDiscounts}
          height={600}
          marqueeContainerClassName={"marquee"}
          direction={"left"}
          delay={10}
        />
      </div>
    </div>
  );
};
