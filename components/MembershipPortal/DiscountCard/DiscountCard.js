import React from "react";
import styles from "./DicountCard.module.scss";

export const DiscountCard = ({ discount, index }) => {
  const tags = () => {
    return discount.tags.map((tag, _index) => (
      <h3
        key={_index}
        className={`
      ${index % 2 ? "color-neon" : ""}`}
      >
        {tag}
      </h3>
    ));
  };

  return (
    <div
      className={`${styles["card"]}
      ${index % 2 ? styles["secondary-card"] : ""}`}
    >
      <div style={{ zIndex: 2 }}>
        {" "}
        <h1
          className={`
      ${index % 2 ? "color-neon" : ""}`}
          style={{ marginBottom: "16px" }}
        >
          {discount.discount}% OFF
        </h1>
        {tags()}
      </div>
      <h3
        className={`${styles["card__promo"]} ${index % 2 ? "color-neon" : ""}`}
      >
        PROMO CODE: {discount.promo_code}
      </h3>
      <img src={discount.image.url} width={200} height={200} />
    </div>
  );
};
