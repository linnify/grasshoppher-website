import styles from "./HighlightedText.module.scss"
import React from "react"

export const HighlightedText = ({text}) => {

  return (
    <div className={styles['highlighted-text']}>
      <h2 className={styles['highlighted-text__content']}>{text}</h2>
      <h2 className={styles['highlighted-text__underline']}>
        {text}
      </h2>
    </div>
  )
}
