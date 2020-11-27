import React from "react";
import {EventItem} from "./EventItem";
import {handleOffset} from "../src/helpers/handleOffset";
import {ThreeCircles} from "./ThreeCircles";

export const EventsPosts = ({ events }) => {

  const offset = handleOffset(0, 0.2);

  const onDisplayEvents = () => {
    return events.map((post, index) => {
      return <EventItem post={post} key={index}/>;
    });
  }

  return(
    <div className={"container"}>
      <div className={"circle"}>
        <ThreeCircles classes={"circle-base circle-top-right"} translateOffset={offset}/>
        <div style={{position: "relative"}}>
          <div className={"row around-md padding-top-bottom-100"} style={{ zIndex:"20"}}>
            {onDisplayEvents()}
          </div>
        </div>
        <div className={"circle hide-xs show-md"}>
          <ThreeCircles classes={"circle-base circle-top-right circle-events"} translateOffset={offset}/>
        </div>
      </div>
    </div>
  );
}