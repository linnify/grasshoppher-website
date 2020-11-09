import React from "react";
import {List} from "./List";
import {joinUsList, listIntro, reachCommunity} from "../constants/b2b";
import {ButtonRedirect} from "./ButtonRedirect/ButtonRedirect";
import {ImageAndVerticalText} from "./ImageAndVerticalText";

export const JoinUs = () => {
  return(
    <div className={"container"} style={{paddingTop:"100px", paddingBottom:"100px"}}>
      <div className={"row middle-xs between-md"}>
        <div className={"col-xs-12 col-md-5 col-xl-6"}>
          <ImageAndVerticalText text={"join us"} imgSrc={"/b2b/join-us.png"}/>
        </div>
        <div className={"col-xs-12 col-md-6 col-xl-5"}>
          <div className={"text-block"}>{listIntro}</div>
          <List list={joinUsList} intro={listIntro}/>
          <div className={"hide-xs show-xl"}>
            <div className={"text-block"}>{reachCommunity.text}</div>
            <ButtonRedirect href={reachCommunity.url} text={reachCommunity.buttonText}/>
          </div>
        </div>
      </div>
      <div className={"show-xs hide-xl"}>
        <div className={"text-block"}>{reachCommunity.text}</div>
        <ButtonRedirect href={reachCommunity.url} text={reachCommunity.buttonText}/>
      </div>
    </div>
  );
}