import React from "react";
import Layout from "../components/Layout";
import {PageTitle} from "../components/PageTitle";
import Page from "../components/Page";
import FadeIn from "../components/FadeIn/FadeIn";
import {PressPosts} from "../components/PressPosts";
import {Loader} from "../components/Loader/Loader";
const datafyCMS = require('@datafycms/js-client')

export default class PressReleases extends React.Component {
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
        title={"Press - GrasshoppHer"}
        url={this.state.pageURL}
      >
        <Layout title={"Press"}>
          {!this.state.loaded && <Loader/>}
          <FadeIn>
            <PageTitle content={"Press"} id={"general"}/>
          </FadeIn>
          <PressPosts events={this.props.posts}/>
        </Layout>
      </Page>
    );
  }
}

export async function getStaticProps({ params }) {
  const posts = await datafyCMS.collections('press')
    .fields(['id', 'title', 'description', 'link', 'link_text', 'image.url', 'author'])
    .pageSize(50)
    .list()
    .then(response => response.results)
  
  return {
    props: { posts },
  };
}
