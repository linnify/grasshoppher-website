import React from "react";
import {Layout} from "../components/Layout";
import {happenings} from "../constants/happenings";
import {Collections} from "../components/Collections";

export default class Happenings extends React.Component {
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
      <Layout title={"Happenings"}>
        {!this.state.loaded && <div>Loader</div>}
        <div className={"container"}>
          <div className={"padding-top-bottom-100"}>
            <div className={"page-title"}>Happenings</div>
            <Collections posts={this.state.posts}/>
          </div>
        </div>
      </Layout>
    );
  }
}

export async function getStaticProps({ params }) {
  return {
    props: { posts: happenings },
  };
}