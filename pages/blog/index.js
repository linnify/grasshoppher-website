import React from "react";
import {Layout} from "../../components/Layout";
import {getBlogPosts} from "../../services/blogPosts";
import BlogPosts from "../../components/BlogPost/BlogPosts";

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
      <Layout title={"Blog"}>
        {!this.state.loaded && <div>Loader</div>}
        <div className={"container"}>
          <div className={"padding-top-bottom-100"}>
            <div className={"page-title"}>Blog</div>
            <BlogPosts posts={this.state.posts}/>
          </div>
        </div>
      </Layout>
    );
  }
}
export async function getStaticProps({ params }) {
  const response = await getBlogPosts();
  return {
    props: { posts: response.results },
  };
}