import React from "react";
import Layout from "../components/Layout";
import {IntroGrassbassadors} from "../components/IntoGrassbassadors";
import {JoinGrassbassadors} from "../components/JoinGrassbassadors";
import Page from "../components/Page";
import FadeInScroll from "../components/FadeInScroll/FadeInScroll";
import FadeIn from "../components/FadeIn/FadeIn";
import {Loader} from "../components/Loader/Loader";

export default class Grassbassadors extends React.Component {
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
        title={"Grassbassadors"}
        description={"Want to make sure you, your peers and your colleagues are represented in the workplace?"}
        url={this.state.pageURL}
        images_url={"https://grasshoppher.com/partner/grassbassadors.png"}
        images_width={327}
        images_height={327}
      >
        <Layout title={"Grassbassadors"}>
          {!this.state.loaded && <Loader/>}
          <FadeIn>
            <IntroGrassbassadors/>
          </FadeIn>
          <FadeInScroll threshold={0.1}>
            <JoinGrassbassadors/>
          </FadeInScroll>
        </Layout>
      </Page>
    );
  }
}