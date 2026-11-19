import React from "react";
import Layout from "../../components/Layout";
import { PostContent } from "../../components/PostContent";
import { PostDate } from "../../components/PostDate";
import { roundReadingTime } from "../../src/helpers/roundReadingTime";
import Page from "../../components/Page";
import { Loader } from "../../components/Loader/Loader";
import { withRouter } from "next/router";
const datafyCMS = require("../../cms/client");
import readTimeEstimate from "read-time-estimate";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      pageURL: "",
    };
  }

  componentDidMount() {
    this.setState({ loaded: true, pageURL: window.location.href });
  }

  render() {
    if (this.props.router?.isFallback) {
      return <div>Loading ...</div>;
    }

    const post = this.props.post;
    const { published_at, title, author, summary } = post;
    const imageSource = post.image?.url || "/landing/download-image.png";

    const { duration } = readTimeEstimate(post.content);
    const readTime = Math.floor(duration * 100) / 100;

    return (
      <Page
        title={title}
        description={summary}
        url={this.state.pageURL}
        images_url={imageSource}
        type={"article"}
        publishedDate={published_at}
        author={author?.name}
      >
        <Layout title={title}>
          {!this.state.loaded && <Loader />}
          <div style={{ background: "#F5E8E680", margin: "100px 0" }}>
            <div className={"container"}>
              <div className={"row middle-xs between-md article--row"}>
                <div className={"col-xs-12 col-md-6 col-xl-5 text-block"}>
                  <div style={{ textTransform: "uppercase" }}>
                    <PostDate date={published_at} />
                  </div>
                  <div className={"section-title"}>{title}</div>
                  <div className={"inter1"}>{summary}</div>
                  <div style={{ display: "flex", color: "#787D8E" }}>
                    <div>{author?.name}</div>
                    <div style={{ padding: "0 5px" }}>|</div>
                    <div>{roundReadingTime(readTime)}</div>
                  </div>
                </div>
                <div
                  className={"col-xs-12 col-md-5 col-xl-6"}
                  style={{ textAlign: "center" }}
                >
                  <img
                    src={imageSource}
                    className={"image"}
                    style={{ padding: "20px 0" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={"container"} style={{ marginBottom: "100px" }}>
            <div className={"inter1"}>
              <PostContent content={post.content} />
            </div>
          </div>
        </Layout>
      </Page>
    );
  }
}

export default withRouter(Article);

export async function getStaticPaths() {
  const posts = await datafyCMS
    .collections("post")
    .pageSize(100)
    .fields(["slug"])
    .list()
    .then((value) => value.results);

  // const posts = await getAllPosts();
  const allPosts = posts.map((post) => {
    return { params: { id: post.slug } };
  });

  return {
    paths: allPosts,
    fallback: false,
    // paths: allPosts,
    // fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = await datafyCMS
    .collections("post")
    .record(params.id)
    .fields([
      "title",
      "summary",
      "published_at",
      "content",
      "author.name",
      "image.url",
    ])
    .get();

  return { props: { post } };
}
