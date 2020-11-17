import React, {useEffect, useState} from "react";
import {PostItem} from "../PostItem/PostItem";
import "./BlogPosts.module.scss"
import {resizeAllGridItems} from "../../src/helpers/resizeGridItem";



// export default class BlogPosts extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: this.props.posts
//     };
//   }
//
//   componentDidMount() {
//     window.onload = resizeAllGridItems;
//     window.addEventListener("resize", resizeAllGridItems);
//   }
//
//   componentWillUnmount() {
//     window.removeEventListener("resize", resizeAllGridItems);
//   }
//
//   displayPosts = () => {
//     return this.state.posts.map((post, index) => {
//       return (<PostItem post={post} key={index}/>);
//     });
//   }
//
//   render() {
//     return(
//       <div className={"blog-post"}>
//         {this.displayPosts()}
//       </div>
//     );
//   }
// }






export const BlogPosts = ({ posts }) => {

  useEffect(() => {
    resizeAllGridItems();
    // window.addEventListener("resize", resizeAllGridItems);
    // return () => {
    //   window.removeEventListener("resize", resizeAllGridItems);
    // };
  });

  const displayPosts = posts.map((post, index) => {
    return (<PostItem post={post} key={index}/>);
  });

  return(
    <div className={"blog-post"}>
      {displayPosts}
    </div>
  );
}