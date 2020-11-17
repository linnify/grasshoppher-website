import React from "react";
import {Layout} from "../components/Layout";
import {pressReleases} from "../src/services/pressReleases";
import {PressItem} from "../components/PressItem";

export default class PressReleases extends React.Component {
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

  onDisplayPressReleases = () => {
    return (this.state.posts.map((post, index) => {
      return <PressItem post={post} key={index}/>;
    }))
  }

  render() {
    return(
      <Layout title={"Press"}>
        {!this.state.loaded && <div>Loader</div>}
        <div className={"container"}>
          <div className={"padding-top-bottom-100"}>
            <div className={"page-title"}>Press</div>
            <div className={"row around-md"}>
              {this.onDisplayPressReleases()}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export async function getStaticProps({ params }) {
  return {
    props: { posts: pressReleases },
  };
}