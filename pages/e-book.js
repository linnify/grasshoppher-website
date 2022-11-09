import Page from "../components/Page";
import Layout from "../components/Layout";
import React from "react";

export const EBook = () => {
  return (
    <Page title={"Download your e-book - GrasshoppHer"}>
      <Layout title={"Download your e-book"}>
        <div
          className={"container"}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "48px",
          }}
        >
          <h2 style={{ textAlign: "center" }}>Download your e-book</h2>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfXz9_t_2_MKgPs4v1ubPiPyeIxbrV9A1BXgVouthXuOCO8hg/viewform?embedded=true"
            className={"google-form"}
          >
            Loading…
          </iframe>
          {/*<iframe*/}
          {/*  id="myFrame"*/}
          {/*  name="frame"*/}
          {/*  onLoad={onSubmit}*/}
          {/*  src="https://docs.google.com/forms/d/e/1FAIpQLSfK-G487lUO70DgnnlRjaFSnEUCEV9VDpwsRun2GO49ygpO-g/viewform?embedded=true"*/}
          {/*  width="640"*/}
          {/*  height="414"*/}
          {/*>*/}
          {/*  Loading…*/}
          {/*</iframe>*/}
        </div>
      </Layout>
    </Page>
  );
};

export default EBook;
