import React from "react";
import {TextStory} from "./TextStory";
import {storyEnd, storyIntro, storyPart2} from "../constants/story";
import {handleOffset} from "../src/helpers/handleOffset";
import FadeInSection from "./FadeInSection/FadeInSection";
import {ThreeCircles} from "./ThreeCircles";

export const StoryIntro = () => {

  const offset = handleOffset(0, 0.2);

  return(
    <div className={"container story--text"}>
      <div className={"padding-top-bottom-100"}>
        <div className={"page-title show-xs hide-lg"}>The Story</div>
        <FadeInSection threshold={0}>
          <div className={"row middle-xs top-lg between-lg story--row "}>
            <div className={"col-xs-12 col-lg-6 col-xl-5"}>
              <div className={"circle"}>
                <div className={"circle-base circle-one circle-story"} style={{ transform: `translateY(-${offset}px)` }}>
                  <span></span>
                </div>
                <div style={{position: "relative"}}>
                  <FadeInSection>
                    <div className={"page-title hide-xs show-lg"}>The Story</div>
                  </FadeInSection>
                  <FadeInSection>
                    <div style={{fontStyle: "italic", paddingTop: "30px"}}>A note from the founder</div>
                  </FadeInSection>
                  <FadeInSection>
                    <TextStory content={storyIntro}/>
                  </FadeInSection>
                </div>
              </div>
            </div>
            <div className={"col-xs-12 col-lg-5 col-xl-6"}>
              <div className={"circle"}>
                <ThreeCircles classes={"circle-base circle-top-right circle-story-photo"} translateOffset={offset}/>
                <div style={{position: "relative"}}>
                  <img src={"./heather-miller.png"} className={"image"} alt={"Heather Miller"}/>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
        <TextStory content={storyPart2}/>
        <FadeInSection><div style={{ paddingTop: "15px" }}>And enter, the “aha moment.” Through the filter of these very different, but essentially all the same, life experiences, she realized the problem was clear. And the answer was right in front of her: Support. Guidance. <span style={{fontStyle: "italic"}}>Mentorship.</span> Why isn’t there more of that? How do you even find that? What would happen if every girl, lady, or woman, had better access to that?</div></FadeInSection>
        <FadeInSection><div style={{ paddingTop: "15px" }}>She decided it was time to find out.</div></FadeInSection>
        <FadeInSection><div style={{ paddingTop: "15px" }}>World, meet <span style={{fontWeight: "bold"}}>GrasshoppHer.</span></div></FadeInSection>
        <TextStory content={storyEnd}/>
        <FadeInSection><div style={{fontStyle: "italic", paddingTop: "15px"}}>Heather Miller</div></FadeInSection>
      </div>
    </div>
  );
}