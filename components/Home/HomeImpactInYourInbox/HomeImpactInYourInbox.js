import React from "react";
import styles from "./HomeImpactInYourInbox.module.scss"
import {PageTitle} from "../../PageTitle";
import {Button} from "../../Button";

export const HomeImpactInYourInbox = () => {
    return (
        <div className={`container ${styles['impact-in-your-inbox']}`}>
            <div className={styles['impact-in-your-inbox__content']}>
                <PageTitle content={'be\nfearless\n& find\nyour\nIdentity'}/>
                <div className={styles['impact-in-your-inbox__subtitle']}>
                    <div className={`${styles['impact-in-your-inbox__text']} inter1`}>
                        Sign up for IMPACT in your inbox. We’ll send bi-weekly leveling up tips and tricks for you
                        personal and professional games.
                    </div>
                </div>
                <Button
                    label={'Sign up'}
                    target={true}
                    href={'https://docs.google.com/forms/d/e/1FAIpQLScJhoNzVv2A5p0e979itmtgvVPz2LdYe91iPWESZBLYjIb2Gg/viewform'}
                />
            </div>
            <div className={styles['impact-in-your-inbox__image']}>
                <img src={'/images/impact.png'}/>
            </div>
        </div>
    )
}