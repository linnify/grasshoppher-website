import React from "react";
import {Layout} from "../components/Layout";
import {events} from "../src/services/events";
import {EventItem} from "../components/EventItem";

export default class Events extends React.Component {
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

  onDisplayEvents = () => {
    return (this.state.posts.map((post, index) => {
      return <EventItem post={post} key={index}/>;
    }))
  }

  render() {
    return(
      <Layout title={"Happenings"}>
        {!this.state.loaded && <div>Loader</div>}
        <div className={"container"}>
          <div className={"padding-top-bottom-100"}>
            <div className={"page-title"}>Happenings</div>
            <div className={"row around-md"}>
              {this.onDisplayEvents()}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export async function getStaticProps({ params }) {
  return {
    props: { posts: events },
  };
}