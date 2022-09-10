import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import Link from "next/link";
import Marquee from 'react-marquee-master';
import styles from "./InstagramSlider.module.scss"

function InstagramSlider ({ feed }) {

  const onDisplayFeed = feed.map((post, i) => {
    const image = post.thumbnail_url || post.media_url
    const caption = post.caption
    
    return (
      <Link key={i} href={post.permalink}>
        <div className={styles.feed}>
          <img src={image} alt={"instagram feed"} className={"image " + styles['feed--img']}/>
          <div style={{padding: "0 20px"}}>
            <div className={styles["feed--insta"]}>instagram</div>
            <LinesEllipsis
              text={caption}
              maxLine="3"
              ellipsis="..."
              className={styles["feed--text"]}
            />
            <img src={"/insta-arrow.svg"} className={styles["feed--arrow"]} alt={"arrow"}/>
          </div>
        </div>
      </Link>
    );
  })

  return(
    <div className={"row"}>
      <div className={"marquee--container"}>
        <Marquee
          marqueeItems={onDisplayFeed}
          height={700}
          marqueeContainerClassName={'marquee'}
          direction={"left"}
          delay={10}
        />
      </div>
    </div>
  );
}

export default React.memo(InstagramSlider)


