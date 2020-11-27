import React from "react";
import {Layout} from "../components/Layout";
import {events} from "../src/services/events";
import {PageTitle} from "../components/PageTitle";
import Page from "../components/Page";
import FadeInIntro from "../components/FadeInIntro/FadeInIntro";
import {EventsPosts} from "../components/EventsPosts";
import {Loader} from "../components/Loader/Loader";

export default class Events extends React.Component {
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
        title={"Happenings - GrasshoppHer"}
        description={"Find more about the events hosted by GrasshoppHer team."}
        url={this.state.pageURL}
      >
        <Layout title={"Happenings"}>
          {!this.state.loaded && <Loader/>}
          <FadeInIntro>
            <PageTitle content={"Happenings"} id={"general"}/>
          </FadeInIntro>
          <EventsPosts events={this.state.posts}/>
        </Layout>
      </Page>
    );
  }
}

export async function getStaticProps({ params }) {
  return {
    props: { posts: events },
  };
}