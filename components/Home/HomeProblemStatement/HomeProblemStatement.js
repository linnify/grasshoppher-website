import React from "react";
import {BigText} from "../../BigText";
import {HighlightedText} from "../../HighlightedText/HighlightedText";
import {RedirectButton} from "../../RedirectButton";
import styles from "./HomeProblemStatement.module.scss"
import {Parallax} from 'react-scroll-parallax';

export const HomeProblemStatement = () => {
  return (
    <div className={`container padding-top-bottom-100 ${styles['problem-statement']}`}>
      <div className={`${styles['problem-statement--align-end']} ${styles['problem-statement__brave']}`}>
        <Parallax speed={10} translateY={[20, -40]}>
          <BigText text={"Brave"}/>
        </Parallax>
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
          <RedirectButton href={"/membership-landing"} target={false} label={"Join now"}/>
        </div>
        <div className={styles['problem-statement--align-end']}>
          <Parallax speed={10} translateY={[60, -20]}>
            <BigText text={"Bold"}/>
          </Parallax>
        </div>
      </div>
      <div className={`margin-top-xl ${styles['problem-statement--align-end']}`}>
        <Parallax speed={10} translateY={[50, -10]}>
          <p className={"big-text"}>Bound
            <wbr/>
            less
          </p>
        </Parallax>

      </div>
    </div>
  )
}