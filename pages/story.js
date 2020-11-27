import React from "react";
import {Layout} from "../components/Layout";
import {StoryIntro} from "../components/StoryIntro";
import Page from "../components/Page";
import {Loader} from "../components/Loader/Loader";


export default class Story extends React.Component {
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
        title={"The Story"}
        description={"This is an inception story. An “aha moment” story. A story about how one girl decided “good” wasn’t good enough."}
        url={this.state.pageURL}
        images_url={"https://grasshoppher.com/heather-miller.png"}
        images_width={642}
        images_height={642}
      >
        <Layout title={"The Story"}>
          {!this.state.loaded && <Loader/>}
          <StoryIntro/>
        </Layout>
      </Page>
    );
  }
}