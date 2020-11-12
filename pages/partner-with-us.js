import React from "react";
import {Layout} from "../components/Layout";
import {Organizations} from "../components/Organizations";
import {PartnerIntro} from "../components/LandingDownload/PartnerIntro";
import {SectionLeftImgRightText} from "../components/SectionLeftImgRightText";
import {allies, bookUs} from "../constants/partnerWithUs";
import {Investor} from "../components/Investor";

export default class PartnerWithUs extends React.Component {
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
    return(
      <Layout title={"Partner with Us"}>
        {!this.state.loaded && <div>Loader</div>}
        <PartnerIntro/>
        <div style={{ background: "#F5E8E666" }}>
          <SectionLeftImgRightText section={allies}/>
        </div>
        <Organizations/>
        <div className={"partner-book-us-background"}>
          <SectionLeftImgRightText section={bookUs}/>
          <div id={bookUs.id}/>
        </div>
        <Investor/>
      </Layout>
    );
  }
}