import React from "react";
import Head from "next/head";
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Loader} from "./Loader/Loader";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    this.setState({loaded: true})
  }

  render() {
    return (
      <div style={{overflow: "hidden"}}>
        {!this.state.loaded && <Loader/> }
        <Head>
          <title>{this.props.title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
          <meta name="facebook-domain-verification" content="4b6xkq3wp9mrtnqqyi8kw9b7iwrbt7" />
        </Head>
        <header>
          <Header/>
        </header>
        {this.props.children}
        <footer>
          <Footer/>
        </footer>
      </div>
    );
  };
}