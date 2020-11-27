import React from "react";
import {List} from "./List";
import {joinUsList, listIntro, reachCommunity} from "../constants/b2b";
import {ButtonRedirect} from "./ButtonRedirect";
import {ImageAndVerticalText} from "./ImageAndVerticalText";
import {handleOffset} from "../src/helpers/handleOffset";
import {ThreeCircles} from "./ThreeCircles";

export const JoinUs = () => {

  const offset = handleOffset(800,0.2);

  return(
    <div className={"container"}>
      <div className={"padding-top-bottom-100"}>
        <div className={"row middle-xs between-md"}>
          <div className={"col-xs-12 col-md-5 col-xl-6"}>
            <div className={"circle"}>
              <div style={{position: "relative", zIndex: "20"}}>
                <ImageAndVerticalText text={"join us"} imgSrc={"/b2b/join-us.png"}/>
              </div>
              <ThreeCircles classes={"circle-base circle-join"} translateOffset={offset}/>
            </div>
          </div>
          <div className={"col-xs-12 col-md-6 col-xl-5"}>
            <div className={"text-block"}>{listIntro}</div>
            <List list={joinUsList} intro={listIntro}/>
            <div className={"hide-xs show-xl"}>
              <div className={"text-block"}>{reachCommunity.text}</div>
              <ButtonRedirect href={reachCommunity.url} text={reachCommunity.buttonText} target={true}/>
            </div>
          </div>
        </div>
        <div className={"show-xs hide-xl"}>
          <div className={"text-block"}>{reachCommunity.text}</div>
          <ButtonRedirect href={reachCommunity.url} text={reachCommunity.buttonText} target={true}/>
        </div>
      </div>
    </div>
  );
}