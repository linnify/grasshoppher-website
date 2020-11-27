import React from "react";
import { getPostById, getAllPosts} from "../../src/services/postsService";
import Layout from "../../components/Layout";
import {PostContent} from "../../components/PostContent";
import {PostDate} from "../../components/PostDate";
import {roundReadingTime} from "../../src/helpers/roundReadingTime";
import Page from "../../components/Page";
import {Limits} from "../../components/Limits/Limits";

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      pageURL: "",
    };
  }

  componentDidMount() {
    this.setState({loaded: true, pageURL: window.location.href});
  }

  render() {
    console.log(this.state.pageURL);
    const { blockContent, title, publishDate, author, image, summary, readTime } = this.props.data;
    const imageSource = image
      ? `${this.props.data.image.file}`
      : "/landing/download-image.png";

    return(
      <Page
        title={title}
        description={summary}
        url={this.state.pageURL}
        images_url={image}
        type={"article"}
        publishedDate={publishDate}
        author={author}
      >
        <Layout title={title}>
          {!this.state.loaded && <Limits/>}
          <div style={{background: "#F5E8E680", margin: "100px 0"}}>
            <div className={"container"}>
              <div className={"row middle-xs between-md article--row"}>
                <div className={"col-xs-12 col-md-6 col-xl-5 text-block"}>
                  <div style={{textTransform: "uppercase"}}>
                    <PostDate date={publishDate}/>
                  </div>
                  <div className={"section-title"}>{title}</div>
                  <div className={"text-block"}>{summary}</div>
                  <div style={{display: "flex", color: "#787D8E"}}>
                    <div>{author.name}</div>
                    <div style={{padding: "0 5px"}}>|</div>
                    <div>{roundReadingTime(readTime)}</div>
                  </div>
                </div>
                <div className={"col-xs-12 col-md-5 col-xl-6"} style={{ textAlign: "center"}}>
                  <img src={imageSource} className={"image"} style={{padding: "20px 0"}}/>
                </div>
              </div>
            </div>
          </div>
          <div className={"container"} style={{ marginBottom: "100px"}}>
            <div className={"text-block"}>
              <PostContent blockContent={blockContent}/>
            </div>
          </div>
        </Layout>
      </Page>
    );
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((post) => {
      return { params: { id: post.slug } };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await getPostById(params.id);
  return { props: { data } };
}
