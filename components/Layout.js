import React from "react";
import Head from "next/head";


export const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
      <footer>

      </footer>
    </div>
  );
};