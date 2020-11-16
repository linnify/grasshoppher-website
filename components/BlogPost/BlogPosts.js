import React from "react";
import {Post} from "../Post/Post";
import "./BlogPost.module.scss"
import {resizeAllGridItems} from "../../services/resizeGridItem";


export default class BlogPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.posts
    };
  }

  componentDidMount() {
    window.onload = resizeAllGridItems;
    window.addEventListener("resize", resizeAllGridItems);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", resizeAllGridItems);
  }

  displayPosts = () => {
    return this.state.posts.map((post, index) => {
      return (<Post post={post} key={index}/>);
    });
  }

  render() {
    return(
      <div className={"blog-post"}>
        {this.displayPosts()}
      </div>
    );
  }
}