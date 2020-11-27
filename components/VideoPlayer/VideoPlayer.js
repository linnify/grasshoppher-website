import React from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.module.scss"
import {handleOffset} from "../../src/helpers/handleOffset";
import {PageCircles} from "../PageCircles";
import FadeIn from "../FadeIn/FadeIn";

export const VideoPlayer = ({ url, id }) => {

  const offsetLeft = handleOffset(0, 0.3);
  const offsetRight = handleOffset(0,0.2);

  return (
    <div className={"container"} style={{paddingTop: "70px"}}>
      <FadeIn>
        <div className={"circle"}>
          <PageCircles classes={"circle-base circle-video-left"} translateOffset={offsetLeft}/>
          <div style={{position: "relative", zIndex: "20"}}>
            <div className={"video"} id={id}>
              <ReactPlayer
                url={url}
                playIcon={""}
                width={"100%"}
                height={"100%"}
                playing
                controls
                light
                allowFullScreen
              />
            </div>
          </div>
          <PageCircles classes={"circle-base circle-video-right"} translateOffset={offsetRight}/>
        </div>
      </FadeIn>
    </div>
  );
}