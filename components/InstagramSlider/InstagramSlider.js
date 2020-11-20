import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import Link from "next/link";
import Marquee from 'react-marquee-master';
import "./InstagramSlider.module.scss"


export default function InstagramSlider ({ feed }) {

  const onDisplayFeed = feed.map(({ node }, i) => {
    return (
      <Link key={i} href={`https://www.instagram.com/grasshoppher/p/${node.shortcode}`}>
        <div className={"feed"}>
          <img src={node.display_resources[0].src} alt={"instagram feed"} className={"image feed--img"}/>
          <div style={{padding: "0 20px"}}>
            <div className={"feed--insta"}>instagram</div>
            <LinesEllipsis
              text={node.edge_media_to_caption.edges[0]?.node.text}
              maxLine="3"
              ellipsis="..."
              className={"feed--text"}
            />
            <img src={"/insta-arrow.svg"} className={"feed--arrow"} alt={"arrow"}/>
          </div>
        </div>
      </Link>
    );
  })

  return(
    <div className={"row"}>
      <div className={"feed--container"}>
        <Marquee
          marqueeItems={onDisplayFeed}
          height={"600"}
          marqueeContainerClassName={"feed--marquee"}
          direction={"left"}
          delay={"10"}
        />
      </div>
    </div>
  );
}


