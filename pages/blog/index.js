import React from "react";
import {Layout} from "../../components/Layout";
import {getPosts} from "../../src/services/postsService";
import {BlogPosts} from "../../components/BlogPosts/BlogPosts";
import {PageTitle} from "../../components/PageTitle";
import Page from "../../components/Page";
import FadeInIntro from "../../components/FadeInIntro/FadeInIntro";
import {Loader} from "../../components/Loader/Loader";

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
          <FadeInIntro>
            <PageTitle content={"Blog"} id={"general"}/>
          </FadeInIntro>
          <div className={"container"}>
            <BlogPosts posts={this.state.posts}/>
          </div>
        </Layout>
      </Page>
    );
  }
}
export async function getStaticProps({ params }) {
  const response = await getPosts();
  return {
    props: { posts: response.results },
  };
}