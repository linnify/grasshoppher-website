import styles from "./HighlightedText.module.scss"
import React from "react"
import {Parallax} from 'react-scroll-parallax';

export const HighlightedText = ({text}) => {

  return (
    <div className={styles['highlighted-text']}>
      <h2 className={styles['highlighted-text__content']}>{text}</h2>
      <Parallax translateX={[-65, 0]} scaleX={[0, 1]} easing="easeOutExpo">
        <h2 className={styles['highlighted-text__underline']}>
          {text}
        </h2>
      </Parallax>
    </div>
  )
}
