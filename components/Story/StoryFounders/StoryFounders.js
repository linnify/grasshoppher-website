import React, {useMemo} from "react"
import styles from "./StoryFounders.module.scss"
import {HighlightedText} from "../../HighlightedText/HighlightedText";

export const StoryFounders = () => {

    const messages = useMemo(() => [
        {
            title: "About Heather Miller",
            paragraphs: [
                "Born and raised in Toronto, Heather trained at the National Ballet of Canada and the Boston Ballet, before touring with such artists as L.L. Cool J, Shaggy and Biz Markie. ",
                "After retiring from the dance scene, she went to law school with the dream of working in legal aid and the mental health system and then made a pivot into design. Several years later, Heather began working in talent acquisition and in Diversity, Equity and Inclusion at McKinsey & Company in New York and it was there that she developed a passion for breaking down barriers for women in the workplace. ",
                "She founded GrasshoppHer, where you come to realign with your unique purpose, in the hope that we will disrupt the status quo and achieve more, together."
            ]
        },
        {
            title: "About Alexa Curtis",
            paragraphs: [
                "Born and raised in small town Mansfield, Connecticut, Alexa Curtis knew she was different. At just 12 years old, she started a fashion blog; A Life in the Fashion Lane (now Life Unfiltered with Alexa).",
                "In Sept 2018, Curtis added ‘host’ to her arsenal as she launched her own radio show on Radio Disney called “Fearless Every Day” with Alexa Curtis. It became a platform for her to express her feelings around everything relating to teens, body image, and mental health.",
                "Following the success of “Fearless Everyday”, Curtis founded the Be Fearless Summit, which is a pop-up summit that appeared at Drexel University on March 15th, 2020. Now the company lies under the GrasshoppHer umbrella."
            ]
        }
    ],[])

    const displayMessages = () => {
        return (
            <>
                {messages.map(message => (
                    <div className={styles['founders__message-section']}>
                        <HighlightedText text={message.title}/>
                        <div className={styles['founders__messages']}>
                            {message.paragraphs.map(paragraph => (
                                <div className={'inter1'}>{paragraph}</div>
                            ))}
                        </div>

                    </div>
                ))}
            </>
        )
    }

    return (
        <div className={`${styles['founders']}`}>
            <div className={styles['founders__header-section__highlighted-band']}/>
            <div className={styles['founders__header-section']}>
                <img src={'/images/founders.png'} className={styles['founders__header-section__image']}/>
            </div>
            <div className={`container ${styles['founders__messages-section']}`}>
                {displayMessages()}
            </div>
        </div>
    )
}