import React from "react";
import {Layout} from "../components/Layout";
import {pressReleases} from "../src/services/pressReleases";
import {PageTitle} from "../components/PageTitle";
import Page from "../components/Page";
import FadeInIntro from "../components/FadeInIntro/FadeInIntro";
import {PressPosts} from "../components/PressPosts";
import {Loader} from "../components/Loader/Loader";

export default class PressReleases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      posts: this.props.posts,
      pageURL: ""
    };
  }

  componentDidMount() {
    this.setState({loaded: true, pageURL: window.location.href});
  }

  render() {

    return(
      <Page
        title={"Press - GrasshoppHer"}
        url={this.state.pageURL}
      >
        <Layout title={"Press"}>
          {!this.state.loaded && <Loader/>}
          <FadeInIntro>
            <PageTitle content={"Press"} id={"general"}/>
          </FadeInIntro>
          <PressPosts events={this.state.posts}/>
        </Layout>
      </Page>
    );
  }
}

export async function getStaticProps({ params }) {
  return {
    props: { posts: pressReleases },
  };
}