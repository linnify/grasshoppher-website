import styles from "./HighlightedText.module.scss"
import React from "react"

export const HighlightedText = ({text}) => {

  return (
    <div className={styles['highlighted-text']}>
      <div className={styles['highlighted-text__content']}>{text}</div>
      <div className={styles['highlighted-text__underline']}>
        {text}
      </div>
    </div>
  )
}
