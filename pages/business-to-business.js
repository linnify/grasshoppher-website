import React from "react";
import {Layout} from "../components/Layout";
import {VideoPlayer} from "../components/VideoPlayer/VideoPlayer";
import {PageTitle} from "../components/PageTitle";
import {b2b} from "../constants/b2b";
import {JoinUs} from "../components/JoinUs";

export default class BusinessToBusiness extends React.Component {
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
      <Layout title={"Join GrasshoppHer Biz"}>
        {!this.state.loaded && <div>Loader</div>}
        <VideoPlayer url={b2b.videoLink} id={b2b.id}/>
        <PageTitle content={b2b}/>
        <JoinUs />
      </Layout>
    );
  }
}