import React from "react";
import {heroIndividual} from "../../constants/hero";
import "./Hero.module.scss"
import {HeroFullScreen} from "./HeroFullScreen";

export const Hero = () => (
  <div className={"container"}>
    <div className={"hero"}>
      <HeroFullScreen product={heroIndividual}/>
    </div>
  </div>
)