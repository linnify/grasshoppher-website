import React from "react"
import LogoSlider from "../LogoSlider/LogoSlider";
import {HighlightedText} from "../HighlightedText/HighlightedText";

export const Sponsors = () => {
    const logos = Array(3).fill(null).map(() => ([
        {
            image: "/logos/boxt-logo.svg",
            alt: "BOXT"
        },
        {
            image: "/logos/uconn-logo.svg",
            alt: "UCONN"
        },
        {
            image: "/logos/99d-logo.svg",
            alt: "99d"
        },
        {
            image: "/logos/central-university-logo.svg",
            alt: "Central University"
        },
        {
            image: "/logos/ziki-logo.png",
            alt: "Ziki"
        },
    ])).flat()

    return (
        <>
            <div className={"container"}>
                <HighlightedText text={"Proud partners"}/>
            </div>
            <LogoSlider logos={logos}/>
        </>
    )
}