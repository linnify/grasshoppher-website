import React from "react";
import Head from "next/head";
import {Header} from "./Header";
import {Footer} from "./Footer";

export const Layout = ({ children, title }) => {
  return (
    <div style={{overflow: "hidden"}}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Header/>
      </header>
      {children}
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};