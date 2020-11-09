import React from "react";
import {Layout} from "../components/Layout";
import {VideoPlayer} from "../components/VideoPlayer/VideoPlayer";
import {PageTitle} from "../components/PageTitle";
import {b2c} from "../constants/b2c";
import {B2CDownloadSection} from "../components/B2CDownloadSection/B2CDownloadSection";
import {Perks} from "../components/Perks/Perks";


export default class BusinessToClient extends React.Component {
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
      <Layout title={"Join GrasshoppHer"}>
        {!this.state.loaded && <div>Loader</div>}
        <VideoPlayer url={b2c.videoLink} id={b2c.id}/>
        <PageTitle content={b2c}/>
        <Perks/>
        <B2CDownloadSection/>
      </Layout>
    );
  }
}