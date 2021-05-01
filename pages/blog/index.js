import React from "react";
import Layout from "../../components/Layout";
import {BlogPosts} from "../../components/BlogPosts/BlogPosts";
import {PageTitle} from "../../components/PageTitle";
import Page from "../../components/Page";
import FadeIn from "../../components/FadeIn/FadeIn";
import {Loader} from "../../components/Loader/Loader";
const datafyCMS = require('@datafycms/js-client')

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      posts: this.props.posts,
    }
  }

  componentDidMount() {
    this.setState({loaded: true});
  }

  render() {
    return(
      <Page
        title={"Blog - GrasshoppHer"}
        description={"Read GrasshoppHer's articles and find more about what they stand for."}
        url={"https://grasshoppher.com/blog"}
      >
        <Layout title={"Blog"}>
          {!this.state.loaded && <Loader/>}
          <FadeIn>
            <PageTitle content={"Blog"} id={"general"}/>
          </FadeIn>
          <div className={"container"}>
            <BlogPosts posts={this.state.posts}/>
          </div>
        </Layout>
      </Page>
    );
  }
}
export async function getStaticProps({ params }) {
  // TODO Bia we load only the first 50 items, after that we should have a load more button
  
  const response = await datafyCMS.collections('post')
    .fields(['slug', 'title', 'summary', 'image.url', 'author.name', 'published_at'])
    .sortBy('published_at', 'desc')
    .pageSize(50)
    .list()
  
  return {
    props: {
      posts: response.results,
      hasMore: !!response.next,
    },
  };
}
