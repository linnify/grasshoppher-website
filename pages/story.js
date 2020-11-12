import React from "react";
import {Layout} from "../components/Layout";
import {TextStory} from "../components/TextStory";
import {storyEnd, storyIntro, storyPart2} from "../constants/story";


export default class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    this.setState({loaded: true});
  }

  render() {
    return (
      <Layout title={"The Story"}>
        {!this.state.loaded && <div>Loader</div>}
        <div className={"container story--text"} style={{paddingTop: "100px", paddingBottom: "100px"}}>
          <div>
            <div className={"page-title show-xs hide-lg"}>The Story</div>
            <div className={"row middle-xs top-lg between-lg story--row "}>
              <div className={"col-xs-12 col-lg-6 col-xl-5"}>
                <div className={"page-title hide-xs show-lg"}>The Story</div>
                <div style={{fontStyle: "italic", paddingTop: "30px"}}>A note from the founder</div>
                <TextStory content={storyIntro}/>
              </div>
              <div className={"col-xs-12 col-lg-5 col-xl-6"}>
                <img src={"./heather-miller.png"} className={"image"} alt={"Heather Miller"}/>
              </div>
            </div>
            <TextStory content={storyPart2}/>
            <div style={{ paddingTop: "15px" }}>And enter, the “aha moment.” Through the filter of these very different, but essentially all the same, life experiences, she realized the problem was clear. And the answer was right in front of her: Support. Guidance. <span style={{fontStyle: "italic"}}>Mentorship.</span> Why isn’t there more of that? How do you even find that? What would happen if every girl, lady, or woman, had better access to that?</div>
            <div style={{ paddingTop: "15px" }}>She decided it was time to find out.</div>
            <div style={{ paddingTop: "15px" }}>World, meet <span style={{fontWeight: "bold"}}>GrasshoppHer.</span></div>
            <TextStory content={storyEnd}/>
            <div style={{fontStyle: "italic", paddingTop: "15px"}}>Heather Miller</div>
          </div>
        </div>
      </Layout>
    );
  }
}