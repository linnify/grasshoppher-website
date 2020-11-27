import React from "react";
import {handleOffset} from "../src/helpers/handleOffset";
import {PressItem} from "./PressItem";
import {PageCircles} from "./PageCircles";

export const PressPosts = ({ events }) => {

  const offset = handleOffset(0, 0.2);

  const onDisplayEvents = () => {
    return events.map((post, index) => {
      return <PressItem post={post} key={index}/>;
    });
  }

  return(
    <div className={"container"}>
      <div className={"circle"}>
        <PageCircles classes={"circle-base circle-top-right"} translateOffset={offset}/>
        <div style={{position: "relative"}}>
          <div className={"row around-md padding-top-bottom-100"} style={{ zIndex:"20"}}>
            {onDisplayEvents()}
          </div>
        </div>
        <div className={"circle hide-xs show-md"} >
          <PageCircles classes={"circle-base circle-top-right circle-events"} translateOffset={offset}/>
        </div>
      </div>
    </div>
  );
}