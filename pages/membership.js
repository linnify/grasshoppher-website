import Page from "../components/Page";
import Layout from "../components/Layout";
import React from "react";
import { MembershipCards } from "../components/ChooseMembership/MembershipCards/MembershipCards";
import { HeroLayout } from "../components/HeroLayout/HeroLayout";
import { RedirectButton } from "../components/RedirectButton";

// const datafyCMS = require("@datafycms/js-client");

const Membership = (props) => {
  // return (
  //   <Page title={"Presale Membership - GrasshoppHer"}>
  //     <Layout title={"Presale Membership"}>
  //       <FadeIn>
  //         <div className={"container"}>
  //           <HighlightedText text={"Presale Membership"} />
  //         </div>
  //       </FadeIn>
  //       <div className={"container padding-top-m padding-bottom-xxl"}>
  //         <div dangerouslySetInnerHTML={{ __html: props.page }} />
  //       </div>
  //     </Layout>
  //   </Page>
  // );
  return (
    <Page title={"Choose Membership - GrasshoppHer"}>
      <Layout title={"Choose Membership"}>
        <HeroLayout
          className={"min-height-auto"}
          backgroundSrc={"/backgrounds/membership-hero.svg"}
        >
          <div
            className={"container content-position"}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 style={{ textAlign: "center", marginBottom: "48px" }}>
              Choose Membership
            </h1>
            <MembershipCards />
            <div style={{ marginBottom: "24px" }}>
              <RedirectButton
                label={"Already a member? Login Now!"}
                href={"/membership-portal"}
                target={false}
                color={"primary"}
              />
            </div>
          </div>
        </HeroLayout>
      </Layout>
    </Page>
  );
};

// export const getStaticProps = async () => {
//   const response = await datafyCMS
//     .collections("pages")
//     .filterBy("type", "eq", "membership")
//     .pageSize(1)
//     .list();
//   const page = response.results?.[0];
//
//   return {
//     props: {
//       page: page?.content || "",
//     },
//   };
// };

export default Membership;
