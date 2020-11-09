import React from "react";
import {HeroComponent} from "./HeroComponent";
import {heroBusiness, heroIndividual} from "../../constants/hero";
import "./Hero.module.scss"

export  const Hero = () => {
  return (
    <div className={"container"}>
      <div className={"hero"}>
        <div className={"hero--grid between-md"}>
          <HeroComponent product={heroIndividual}/>
          <HeroComponent product={heroBusiness}/>
        </div>
      </div>
    </div>
  );
}