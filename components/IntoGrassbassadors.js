import React from "react";
import {List} from "./List";
import {listGrassbassadors} from "../constants/grassbassadors";

export const IntroGrassbassadors = () => {
  return (
    <div className={"container"}>
      <div className={"padding-top-bottom-100"}>
        <div className={"page-title show-xs hide-lg"}>Grassbassadors</div>
        <div className={"row middle-xs middle-lg between-md grassbassadors--row"}>
          <div className={"col-xs-12 col-lg-6 col-xl-5"}>
            <div className={"page-title hide-xs show-lg"}>Grassbassadors</div>
            <div className={"text-block"}>Our Grassbassadors (who represent all genders btw) are the backbone of our community.  They give our members the necessary wings to soar.  By promoting GrasshoppHer’s values, sharing news, and organizing events you’ll:</div>
            <List list={listGrassbassadors}/>
          </div>
          <div className={"col-xs-12 col-lg-6 col-xl-6"}>
            <img src={"/partner/grassbassadors.png"} className={"image grassbassadors--image"}/>
          </div>
        </div>
        <div className={"text-block"}>Moral of the story, you’ll have an impact on what the world will look like for girls and women. </div>
      </div>
    </div>
  );
}