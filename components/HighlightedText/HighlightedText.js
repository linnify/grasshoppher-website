import styles from "./HighlightedText.module.scss"
import React from "react"

export const HighlightedText = ({text}) => {

    return (
        <>
            {text.map(textPart => <div className={styles['highlighted-text']}>
                <div>{textPart}</div>
                <div className={styles['highlight']}/>
            </div>)}
        </>
    )
}
