import React from "react";
import {Layout} from "../components/Layout";
import {VideoPlayer} from "../components/VideoPlayer/VideoPlayer";
import {PageTitle} from "../components/PageTitle";
import {b2b} from "../constants/b2b";
import {JoinUs} from "../components/JoinUs";
import {TextBoldKeyword} from "../components/TextBoldKeyword";
import Page from "../components/Page";
import FadeInSection from "../components/FadeInSection/FadeInSection";
import {Loader} from "../components/Loader/Loader";

export default class BusinessToBusiness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      pageURL: ""
    };
  }

  componentDidMount() {
    this.setState({loaded: true, pageURL: window.location.href});
  }

  render() {
    return (
      <Page
        title={"Join GrasshoppHer Biz"}
        description={"Want to make mentorship a priority in your organization? Support your community by connecting with ours."}
        url={this.state.pageURL}
        images_url={"https://grasshoppher.com/landing/hero-business.jpg"}
        images_width={327}
        images_height={322}
      >
        <Layout title={"Join GrasshoppHer Biz"}>
          {!this.state.loaded && <Loader/>}
          <VideoPlayer url={b2b.videoLink} id={b2b.id}/>
          <FadeInSection>
            <PageTitle content={b2b.title}/>
          </FadeInSection>
          <FadeInSection>
            <div className={"container"}>
              <TextBoldKeyword text={b2b}/>
            </div>
          </FadeInSection>
          <FadeInSection>
            <JoinUs />
          </FadeInSection>
        </Layout>
      </Page>
    );
  }
}