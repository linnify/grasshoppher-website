import React from "react";
import {Layout} from "../components/Layout";

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
      <Layout title={"GrasshoppHers"}>
        {!this.state.loaded && <div>Loader</div>}
        <h1>Welcome to GrasshoppHers</h1>
      </Layout>
    );
  }
}