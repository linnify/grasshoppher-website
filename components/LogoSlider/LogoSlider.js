import React from "react";
import Marquee from "react-marquee-master";
import styles from "./LogoSlider.module.scss";

const LogoSlider = ({ logos, isArticle = false }) => {
  const onDisplayLogos = logos.map((logo, index) => (
    <div className={styles["logo-slider__wrapper"]} key={index}>
      <img
        src={logo.image}
        alt={logo.alt}
        className={styles["logo-slider__image"]}
      />
    </div>
  ));

  const onDisplayArticles = logos.map((logo, index) => (
    <div key={index} className={`${styles["logo-slider__article"]} `}>
      <a href={logo.link} target={"_blank"}>
        <img src={logo.image} alt={logo.alt} />
      </a>
    </div>
  ));

  return (
    <div className={"row"}>
      <div className={`marquee--container ${styles["logo-slider"]}`}>
        <Marquee
          marqueeItems={isArticle ? onDisplayArticles : onDisplayLogos}
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
