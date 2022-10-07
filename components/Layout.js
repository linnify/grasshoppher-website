import React from "react";
import Head from "next/head";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Loader } from "./Loader/Loader";
import { EBookDialog } from "./EBookDialog/EBookDialog";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      open: false,
    };
  }

  componentDidMount() {
    this.setState({ loaded: true });
    if (typeof window !== "undefined") {
      if (!window.localStorage.getItem("EBOOK_DIALOG")) {
        this.myTimeout = setTimeout(() => {
          this.setState({ open: true });
          window.localStorage.setItem("EBOOK_DIALOG", "opened");
        }, 5000);
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.myTimeout);
  }

  render() {
    const onClose = () => {
      this.setState({ open: false });
    };

    return (
      <div style={{ overflow: "hidden" }}>
        {!this.state.loaded && <Loader />}
        <Head>
          <title>{this.props.title}</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta
            name="facebook-domain-verification"
            content="4b6xkq3wp9mrtnqqyi8kw9b7iwrbt7"
          />
        </Head>
        <header>
          <Header />
        </header>
        <main>
          {this.props.children}
          <EBookDialog open={this.state.open} onClose={onClose} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}
