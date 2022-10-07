import React from "react";
import Marquee from "react-marquee-master";
import styles from "./LogoSlider.module.scss";

const LogoSlider = ({ logos }) => {
  const onDisplayLogos = logos.map((logo, index) => (
    <div className={styles["logo-slider__wrapper"]}>
      <img
        key={index}
        src={logo.image}
        alt={logo.alt}
        className={styles["logo-slider__image"]}
      />
    </div>
  ));

  return (
    <div className={"row"}>
      <div className={`marquee--container ${styles["logo-slider"]}`}>
        <Marquee
          marqueeItems={onDisplayLogos}
          height={500}
          marqueeContainerClassName={"marquee"}
          direction={"left"}
          delay={10}
        />
      </div>
    </div>
  );
};

export default React.memo(LogoSlider);
