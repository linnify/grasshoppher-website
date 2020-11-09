import React from "react";
import {Layout} from "../components/Layout";
import {Hero} from "../components/Hero/Hero";
import {Values} from "../components/Values/Values";
import {Mentorship} from "../components/Mentorship/Mentorship";
import {Limits} from "../components/Limits/Limits";
import {MobileApp} from "../components/MobileApp/MobileApp";
import {LandingDownload} from "../components/LandingDownload/LandingDownload";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
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
      </Layout>
    );
  }
}