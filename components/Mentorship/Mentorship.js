import React from "react";
import {SectionTitle} from "../SectionTitle";
import {mentorship} from "../../constants/landing";
import {ButtonRedirect} from "../ButtonRedirect";
import "./Mentorship.module.scss";
import {handleOffset} from "../../src/helpers/handleOffset";
import {ThreeCircles} from "../ThreeCircles";

export const Mentorship = () => {

  const offsetOne = handleOffset(768, 0.2);
  const offset = handleOffset(1000,0.3);

  return(
    <div className={"container mentorship"}>
      <div className={"row middle-xs between-md mentorship--row"}>
        <div className={"col-xs-12 col-md-6 col-xl-5"}>
          <div className={"circle"}>
            <div className={"circle-base circle-one"}  style={{ transform: `translateY(-${offsetOne}px)` }}>
              <span></span>
            </div>
            <div style={{position: "relative"}}>
              <SectionTitle content={mentorship}/>
              <ButtonRedirect href={mentorship.url} text={mentorship.buttonText}/>
            </div>
          </div>
        </div>
        <div className={"col-xs-12 col-md-5 col-xl-6"} >
          <div className={"circle"}>
            <ThreeCircles classes={"circle-base circle-top-right"} translateOffset={offset}/>
            <div style={{position: "relative"}}>
              <img src={"/landing/mentorship.png"} className={"image mentorship--img"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}