import React from "react";
import {HighlightedText} from "../../HighlightedText/HighlightedText";
import {Button} from "../../Button";
import styles from "./HomeEBook.module.scss"

export const HomeEBook = () => {
    return (
        <div className={`container margin-top-bottom-100 ${styles['home-e-book']}`}>
            <HighlightedText text={"Get leveling up tips and tricks for your personal and professional games."}/>
            <Button label={"Get your free downloadable ebook"} target={true}
                    href={"/documents/the_career_hacks_you_need.pdf"}/>
        </div>
    )
}