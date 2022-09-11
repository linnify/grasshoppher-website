import React from "react";
import {BigText} from "../../BigText";
import {HighlightedText} from "../../HighlightedText/HighlightedText";
import {Button} from "../../Button";
import styles from "./HomeProblemStatement.module.scss"

export const HomeProblemStatement = () => {
    return (
        <div className={`container padding-top-bottom-100 ${styles['problem-statement']}`}>
            <div className={`${styles['problem-statement--align-end']} ${styles['problem-statement__brave']}`}>
                <BigText text={"Brave"}/>
            </div>
            <HighlightedText
                text={"GrasshoppHer is a career road mapping platform and\ncommunity, designed to connect you with industry leader\nand empower you to reach your fullest, brightest potential."}
            />
            <div className={styles['problem-statement__section']} style={{width: "100%"}}>
                <div className={`col start-xs ${styles['problem-statement__section-title']}`}>
                    <h3>
                        Maybe you're ready to make that vision board a reality board. Or, maybe you want to level up
                        for your next step.
                    </h3>
                    <div className={`inter1 ${styles['problem-statement__section-subtitle']}`}>
                        We know what it feels like to have taken some seemingly unrelated turns on our chosen paths.
                        Let us be your roadmap on the next leg of your journey. We’ll help you fill in the missing
                        pieces to reach your full potential.
                    </div>
                    <Button href={"/membership"} target={false} label={"Join now"}/>
                </div>
                <div className={styles['problem-statement--align-end']}>
                    <BigText text={"Bold"}/>
                </div>
            </div>
            <div className={`margin-top-xl ${styles['problem-statement--align-end']}`}>
                <p className={"big-text"}>Bound<wbr/>less</p>
            </div>
        </div>
    )
}