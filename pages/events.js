import React from "react";
import Layout from "../components/Layout";
import {PageTitle} from "../components/PageTitle";
import Page from "../components/Page";
import FadeIn from "../components/FadeIn/FadeIn";
import {EventsPosts} from "../components/EventsPosts";
import {Loader} from "../components/Loader/Loader";
const datafyCMS = require('@datafycms/js-client')

export default class Events extends React.Component {
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
        title={"Happenings - GrasshoppHer"}
        description={"Find more about the events hosted by GrasshoppHer team."}
        url={this.state.pageURL}
      >
        <Layout title={"Happenings"}>
          {!this.state.loaded && <Loader/>}
          <FadeIn>
            <PageTitle content={"Happenings"} id={"general"}/>
          </FadeIn>
          <EventsPosts events={this.props.events}/>
        </Layout>
      </Page>
    );
  }
}

export async function getStaticProps({ params }) {
  const events = await datafyCMS.collections('event')
    .fields(['id', 'title', 'description', 'image.url', 'button_link', 'button_text', 'disabled'])
    .pageSize(50)
    .list()
    .then(response => response.results)
  
  return {
    props: { events },
  };
}
