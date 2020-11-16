import React from "react";
import {Layout} from "../components/Layout";
import {press} from "../constants/press";
import {Collections} from "../components/Collections";

export default class Press extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      posts: this.props.posts,
    };
  }

  componentDidMount() {
    this.setState({loaded: true});
  }

  render() {
    return(
      <Layout title={"Press"}>
        {!this.state.loaded && <div>Loader</div>}
        <div className={"container"}>
          <div className={"padding-top-bottom-100"}>
            <div className={"page-title"}>Press</div>
            <Collections posts={this.state.posts}/>
          </div>
        </div>
      </Layout>
    );
  }
}

export async function getStaticProps({ params }) {
  return {
    props: { posts: press },
  };
}