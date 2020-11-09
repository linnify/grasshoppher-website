import React from "react";

export const DownloadButton = () => {
  return(
    <din className={"button-download"}>
      <div>Download the app</div>
      <a href={"https://apps.apple.com/ro/app/grasshoppher/id1520009505"}>
        <img src={"/download-button.png"} alt={"download the app from here"}/>
      </a>
    </din>
  );
}