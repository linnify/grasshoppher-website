import React from "react";
import ReactPlayer from "react-player";
import "./VideoPlayer.module.scss"

export const VideoPlayer = ({ url }) => {
  return (
    <div className={"container"} style={{paddingTop: "70px"}}>
      <div className={"video"}>
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
  );
}