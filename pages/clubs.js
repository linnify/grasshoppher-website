import * as React from "react";
import Page from "../components/Page";
import Layout from "../components/Layout";
import {Loader} from "../components/Loader/Loader";
import FadeIn from "../components/FadeIn/FadeIn";
import { IntroCampusClubs } from "../components/IntroCampusClubs";
import { JoinCampusClubs } from "../components/JoinCampusClubs";

export default class Clubs extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }
  
  componentDidMount() {
    this.setState({loaded: true, pageURL: window.location.href});
  }
  
  
  render() {
    return (
      <Page
        title={"GrasshoppHer Campus Clubs"}
        url={this.state.pageURL}
        images_url={"https://grasshoppher.com/partner/grassbassadors.png"}
        images_width={327}
        images_height={327}
      >
        <Layout title={"GrasshoppHer Campus Clubs"}>
          {!this.state.loaded && <Loader/>}
          <FadeIn>
            <IntroCampusClubs/>
          </FadeIn>
          <FadeIn threshold={0.1}>
            <JoinCampusClubs/>
          </FadeIn>
        </Layout>
      </Page>
    )
  }
}
