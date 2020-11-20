import React from "react";
import {Layout} from "../components/Layout";
import {Hero} from "../components/Hero/Hero";
import {Values} from "../components/Values/Values";
import {Mentorship} from "../components/Mentorship/Mentorship";
import {Limits} from "../components/Limits/Limits";
import {MobileApp} from "../components/MobileApp/MobileApp";
import {LandingDownload} from "../components/LandingDownload/LandingDownload";
import {InstagramSection} from "../components/InstagramSection";
const Instagram = require('instagram-web-api');
import {INSTAGRAM_USERNAME, INSTAGRAM_ID} from "../constants/deploy"

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  async componentDidMount() {
    this.setState({loaded: true});
  }

  render() {
    return (
      <Layout title={"GrasshoppHer"}>
        {!this.state.loaded && <div>Loader</div>}
        <Hero/>
        <Values/>
        <Mentorship/>
        <Limits/>
        <MobileApp/>
        <LandingDownload/>
        <InstagramSection feed={this.props.posts}/>
      </Layout>
    );
  }
}


export async function getStaticProps({ params }) {
  console.log(INSTAGRAM_USERNAME, INSTAGRAM_ID)
  const client = new Instagram({ INSTAGRAM_USERNAME });
  const response = await client.getUserIdPhotos({ id: INSTAGRAM_ID, first: 24 });

  return {
    props: {
      posts: response.user.edge_owner_to_timeline_media.edges,
    },
  };
}
