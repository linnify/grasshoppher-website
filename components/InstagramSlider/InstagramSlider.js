import React from "react";
import Marquee from 'react-marquee-master';
import styles from "./InstagramSlider.module.scss"

export const InstagramSlider = ({feed}) => {

  const onDisplayFeed = feed.map((post, i) => {
    const image = post.thumbnail_url || post.media_url
    const caption = post.caption

    return (
      <div key={i} className={styles['instagram-slider__post__wrapper']}>
        <div className={styles['instagram-slider__post']}>
          <a href={post.permalink} target={'_blank'} className={styles['instagram-slider__post__link']}>
            <div className={styles['instagram-slider__post__content']}>
              <div className={styles['instagram-slider__post__img']}>
                <img src={image} alt={"instagram feed"} className={"image"}/>
              </div>
              <div>
                <div className={`inter3 ${styles['instagram-slider__text']}`}>
                  {caption}
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  })

  return (
    <div className={"row"}>
      <div className={`marquee--container ${styles['instagram-slider']}`}>
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




