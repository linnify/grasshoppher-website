import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang={"en-US"}>
        <Head>
          <link rel="icon" href="/favicon.png"/>

          <meta charSet="utf-8"/>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>

        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </html>
    );
  }
}