import React from "react";
import styles from "./EBook.module.scss"
import {PageTitle} from "../PageTitle";
import {Button} from "../Button";

export const EBook = () => {
    return (
        <div className={`container ${styles['ebook']}`}>
            <div className={styles['ebook__content']} id={"ebook-content"}>
                <PageTitle content={'Up your\ngame.\nLand\nthe job.\nBe your\nown\nboss.'}/>
                <div className={styles['ebook__subtitle']}>
                    <div className={`${styles['ebook__text']} inter1`}>
                        Get leveling up tips and tricks for your personal and professional games.
                    </div>
                </div>
                <Button
                    label={"Get your free\ndownloadable ebook"}
                    target={true}
                    href={"/documents/the_career_hacks_you_need.pdf"}
                />
            </div>
            <div className={styles['ebook__image']}>
                <img src={'/images/impact.png'}/>
            </div>
        </div>
    )
}