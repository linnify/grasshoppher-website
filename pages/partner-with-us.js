import React from "react";
import {Layout} from "../components/Layout";
import {Organizations} from "../components/Organizations";
import {PartnerIntro} from "../components/PartnerIntro";
import {SectionLeftImgRightText} from "../components/SectionLeftImgRightText";
import {allies, bookUs} from "../constants/partnerWithUs";
import {Investor} from "../components/Investor";
import Page from "../components/Page";
import FadeInSection from "../components/FadeInSection/FadeInSection";
import FadeInIntro from "../components/FadeInIntro/FadeInIntro";
import {Loader} from "../components/Loader/Loader";

export default class PartnerWithUs extends React.Component {
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
    return(
      <Page
        title={"Partner with Us"}
        description={"If you want to go fast, go alone. If you want to go far, go together. – Anonymous proverb and also 100% of everything that fuels what we do here."}
        url={this.state.pageURL}
        images_url={"https://grasshoppher.com/partner/intro.png"}
        images_width={327}
        images_height={327}
      >
        <Layout title={"Partner with Us"}>
          {!this.state.loaded && <Loader/>}
          <FadeInIntro>
            <PartnerIntro/>
          </FadeInIntro>
          <FadeInSection>
            <div style={{ background: "#F5E8E666" }}>
              <SectionLeftImgRightText section={allies}/>
            </div>
          </FadeInSection>
          <FadeInSection>
            <Organizations/>
          </FadeInSection>
          <FadeInSection>
            <div className={"partner-book-us-background"}>
              <SectionLeftImgRightText section={bookUs}/>
              <div id={bookUs.id}/>
            </div>
          </FadeInSection>
          <FadeInSection>
            <Investor/>
          </FadeInSection>
        </Layout>
      </Page>
    );
  }
}