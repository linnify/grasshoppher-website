import React from "react";
import Layout from "../components/Layout";
import {Hero} from "../components/Hero/Hero";
import {Values} from "../components/Values/Values";
import {Mentorship} from "../components/Mentorship/Mentorship";
import {Limits} from "../components/Limits/Limits";
import {MobileApp} from "../components/MobileApp/MobileApp";
import {LandingDownload} from "../components/LandingDownload/LandingDownload";
import {InstagramSection} from "../components/InstagramSection";
import FadeInScroll from "../components/FadeInScroll/FadeInScroll";
import FadeIn from "../components/FadeIn/FadeIn";
import {Loader} from "../components/Loader/Loader";
import {getInstagramPosts} from "../src/services/instagram";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      posts: this.props.posts,
    };
  }
  
  async componentDidMount() {
    this.setState({loaded: true});
  }
  
  render() {
    return (
      <Layout title={"GrasshoppHer"}>
        {!this.state.loaded && <Loader/>}
        <FadeIn>
          <Hero/>
        </FadeIn>
        <Values/>
        <FadeInScroll threshold={0.25}>
          <Mentorship/>
        </FadeInScroll>
        <FadeInScroll>
          <Limits/>
        </FadeInScroll>
        <FadeInScroll>
          <MobileApp/>
        </FadeInScroll>
        <FadeInScroll>
          <LandingDownload/>
        </FadeInScroll>
        <FadeInScroll threshold={0.25}>
          <InstagramSection feed={this.state.posts}/>
        </FadeInScroll>
      </Layout>
    );
  }
}

export async function getStaticProps({ params }) {
  const posts = await getInstagramPosts();
  
  return {
    props: {
      posts,
    },
  };
}
