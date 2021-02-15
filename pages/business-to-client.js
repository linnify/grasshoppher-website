import React from "react";
import Layout from "../components/Layout";
import {VideoPlayer} from "../components/VideoPlayer/VideoPlayer";
import {PageTitle} from "../components/PageTitle";
import {b2c} from "../constants/b2c";
import {B2CDownloadSection} from "../components/B2CDownloadSection/B2CDownloadSection";
import {Perks} from "../components/Perks/Perks";
import {b2b} from "../constants/b2b";
import {TextBoldKeyword} from "../components/TextBoldKeyword";
import Page from "../components/Page";
import FadeInScroll from "../components/FadeInScroll/FadeInScroll";
import {Loader} from "../components/Loader/Loader";
import {RolesDescription} from "../components/RolesDescription";


export default class BusinessToClient extends React.Component {
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
        title={"Join GrasshoppHer"}
        description={"Women. Mentorship, Fast. Welcome to your community"}
        url={this.state.pageURL}
        images_url={"https://grasshoppher.com/landing/hero-individual.jpg"}
        images_width={327}
        images_height={322}
      >
        <Layout title={"Join GrasshoppHer"}>
          {!this.state.loaded && <Loader/>}
          <VideoPlayer url={b2c.videoLink} id={b2c.id}/>
          <FadeInScroll>
            <PageTitle content={b2c.title}/>
          </FadeInScroll>
          <FadeInScroll>
            <div className={"container"}>
              <TextBoldKeyword text={b2c}/>
              
              <RolesDescription/>
            </div>
          </FadeInScroll>
          <FadeInScroll>
            <Perks/>
          </FadeInScroll>
          <FadeInScroll>
            <B2CDownloadSection/>
          </FadeInScroll>
        </Layout>
      </Page>
    );
  }
}
