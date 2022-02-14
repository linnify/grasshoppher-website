import React from "react";
import {heroIndividual} from "../../constants/hero";
import styles from "./Hero.module.scss"
import {HeroFullScreen} from "./HeroFullScreen";

export const Hero = () => (
  <div className={"container"}>
    <div className={styles.hero}>
      <HeroFullScreen product={heroIndividual}/>
    </div>
  </div>
)
