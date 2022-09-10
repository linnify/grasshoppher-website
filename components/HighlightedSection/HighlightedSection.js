import React from "react"
import styles from "./HighlightedSection.module.scss"

export const HighlightedSection = ({words, alignment}) => {
    const displayWords = () => {
        return (
            <>
                {words.map(word => (
                    <div className={styles['highlighted-section--word']} style={alignment === "right" ? {flexDirection: "row-reverse"} : {flexDirection: "row"}}>
                        {word}
                        <hr className={styles['highlighted-section--divider']}/>
                    </div>
                ))}
            </>
        )
    }

    return (
        <div className={styles['highlighted-section']}>
            <div className={'container'}>
                {displayWords()}
            </div>
        </div>
)
}