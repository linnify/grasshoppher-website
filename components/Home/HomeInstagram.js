import React from "react";
import {InstagramSlider} from "../InstagramSlider/InstagramSlider";
import {HighlightedText} from "../HighlightedText/HighlightedText";

export const HomeInstagram = ({feed}) => {
    return(
        <>
            <div className={"container"}>
                <HighlightedText text={"Follow our journey\non instagram"}/>
            </div>
            <InstagramSlider feed={feed}/>
        </>
    );
}