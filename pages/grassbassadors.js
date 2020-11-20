import React from "react";
import {Layout} from "../components/Layout";
import {IntroGrassbassadors} from "../components/IntoGrassbassadors";
import {JoinGrassbassadors} from "../components/JoinGrassbassadors";

export default class Grassbassadors extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.setState({loaded: true});
  }


  render() {
    return(
      <Layout title={"Partner with Us"}>
        {!this.state.loaded && <div>Loader</div>}
        <IntroGrassbassadors/>
        <JoinGrassbassadors/>
      </Layout>
    );
  }
}