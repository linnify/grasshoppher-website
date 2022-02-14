import React from "react";
import Link from "next/link";
import FadeIn from "../FadeIn/FadeIn";
import FadeInScroll from "../FadeInScroll/FadeInScroll";
import styles from './Hero.module.scss'

export const HeroFullScreen = ({product}) => {

  const displayDescription = product.description.map((text, index) => (<div key={index}><FadeInScroll>{text}</FadeInScroll></div>))

  return (
    <div className={styles["hero--component-full-screen"]}>
      <div className={styles["hero__overlay"]}>
        <FadeIn threshold={0}>
          <img src={product.backgroundFull} className={`${styles['hero--img']} ${styles['hero--img--web']}`}/>
          <img src={product.background} className={`${styles["hero--img"]} ${styles["hero--img--mobile"]}`}/>
        </FadeIn>
        <div className={styles["hero__context"]}>
          <div className={styles["hero__description"] + " show-xs hide-lg"}>
            <FadeInScroll threshold={0}>
              {displayDescription}
            </FadeInScroll>
          </div>
          <FadeInScroll>
            <Link href={product.pageLink}>
              <div className={`${styles['hero--button']} ${styles['hero__individual']}`}>{product.buttonText}</div>
            </Link>
          </FadeInScroll>
          <div className={styles["hero__description"] + " hide-xs show-lg"}>
            <FadeInScroll threshold={0}>
              {displayDescription}
            </FadeInScroll>
          </div>
        </div>
      </div>
    </div>
  )
}
