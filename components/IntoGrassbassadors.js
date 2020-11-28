import React from "react";
import {List} from "./List";
import {listGrassbassadors} from "../constants/grassbassadors";
import {handleOffset} from "../src/helpers/handleOffset";
import {PageCircles} from "./PageCircles";

export const IntroGrassbassadors = () => {

  const offset = handleOffset(0,0.3)

  return (
    <div className={"container"}>
      <div className={"padding-top-bottom-100"}>
        <div className={"page-title show-xs hide-lg"}>Grassbassadors</div>
        <div className={"row middle-xs middle-lg between-md grassbassadors--row"}>
          <div className={"col-xs-12 col-lg-6 col-xl-5"}>
            <div className={"circle"}>
              <div className={"circle-base circle-one circle-story"} style={{ transform: `translateY(-${offset}px)` }}>
                <span></span>
              </div>
              <div style={{position: "relative"}}>
                <div className={"page-title hide-xs show-lg"}>Grassbassadors</div>
                <div className={"text-block"}>Our Grassbassadors (who represent all genders btw) are the backbone of our community.  They give our members the necessary wings to soar.  By promoting GrasshoppHer’s values, sharing news, and organizing events you’ll:</div>
              </div>
            </div>
            <List list={listGrassbassadors}/>
            <div className={"text-block"} style={{marginTop: "-15px"}}>Moral of the story, you’ll have an impact on what the world will look like for girls and women. </div>
          </div>
          <div className={"col-xs-12 col-lg-6 col-xl-6"}>
            <div className={"circle"}>
              <PageCircles classes={"circle-base circle-top-right circle-story-photo"} translateOffset={offset}/>
              <div style={{position: "relative" , textAlign:"center"}}>
                <img src={"/partner/grassbassadors.png"} className={"image grassbassadors--image"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}