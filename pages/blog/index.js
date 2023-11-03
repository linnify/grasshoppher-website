import React from "react";
import Layout from "../../components/Layout";
import { BlogPosts } from "../../components/BlogPosts/BlogPosts";
import { PageTitle } from "../../components/PageTitle";
import Page from "../../components/Page";
import FadeIn from "../../components/FadeIn/FadeIn";
import { Loader } from "../../components/Loader/Loader";
const datafyCMS = require("@datafycms/js-client");

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      posts: this.props.posts,
      hasMore: !!this.props.hasMore,
      page: 1,
    };
  }

  componentDidMount() {
    this.setState({ loaded: true });
  }

  async onLoadMore() {
    const url = `${process.env.NEXT_PUBLIC_HOST}/api/get-articles`;
    console.log(url);
    const response = await fetch(url, {
      body: JSON.stringify({
        page: this.state.page + 1,
        pageSize: 20,
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    this.setState({
      posts: [...(this.state.posts || []), ...result.posts],
      hasMore: !!result.next,
      page: this.state.page + 1,
    });
  }

  render() {
    return (
      <Page
        title={"THE HUB - GrasshoppHer"}
        description={
          "Read GrasshoppHer's articles and find more about what they stand for."
        }
        url={"https://grasshoppher.com/blog"}
      >
        <Layout title={"THE HUB"}>
          {!this.state.loaded && <Loader />}
          <div className={"container"}>
            <FadeIn>
              <PageTitle content={"THE HUB"} id={"general"} />
            </FadeIn>
            <BlogPosts
              posts={this.state.posts}
              hasMore={this.state.hasMore}
              onLoadMore={() => this.onLoadMore()}
            />
          </div>
        </Layout>
      </Page>
    );
  }
}
export async function getStaticProps({ params }) {
  const response = await datafyCMS
    .collections("post")
    .fields([
      "slug",
      "title",
      "summary",
      "image.url",
      "author.name",
      "published_at",
    ])
    .sortBy("published_at", "desc")
    .pageSize(20)
    .page(1)
    .list();

  return {
    props: {
      posts: response.results,
      hasMore: !!response.next,
    },
  };
}
