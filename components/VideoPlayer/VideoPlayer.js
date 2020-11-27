import React from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.module.scss"
import {handleOffset} from "../../src/helpers/handleOffset";
import {ThreeCircles} from "../ThreeCircles";
import FadeInIntro from "../FadeInIntro/FadeInIntro";

export const VideoPlayer = ({ url, id }) => {

  const offsetLeft = handleOffset(0, 0.3);
  const offsetRight = handleOffset(0,0.2);

  return (
    <div className={"container"} style={{paddingTop: "70px"}}>
      <FadeInIntro>
        <div className={"circle"}>
          <ThreeCircles classes={"circle-base circle-video-left"} translateOffset={offsetLeft}/>
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
          <ThreeCircles classes={"circle-base circle-video-right"}  translateOffset={offsetRight}/>
        </div>
      </FadeInIntro>
    </div>
  );
}