import React from "react";
import styles from "./EBook.module.scss"
import {PageTitle} from "../PageTitle";
import {RedirectButton} from "../RedirectButton";
import {Parallax} from 'react-scroll-parallax';

export const EBook = ({disableAnimation = false}) => {
  return (
    <div className={`container ${styles['ebook']}`}>
      <div className={styles['ebook__content']} id={"ebook-content"}>
        <PageTitle content={'Up your\ngame.\nLand\nthe job.\nBe your\nown\nboss.'}/>
        <div className={styles['ebook__subtitle']}>
          <div className={`${styles['ebook__text']} inter1`}>
            Get leveling up tips and tricks for your personal and professional games.
          </div>
        </div>
        <RedirectButton
          label={"Get your free\ndownloadable ebook"}
          target={true}
          href={"/documents/the_career_hacks_you_need.pdf"}
        />
      </div>
      <div className={styles['ebook__image']}>
        <Parallax disabled={disableAnimation} translateX={[20, 0]} easing="easeOutCirc">
          <img src={'/images/impact.png'}/>
        </Parallax>
      </div>
    </div>
  )
}