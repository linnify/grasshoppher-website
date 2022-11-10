import Page from "../components/Page";
import Layout from "../components/Layout";
import React from "react";
import { MembershipCards } from "../components/ChooseMembership/MembershipCards/MembershipCards";
import { HeroLayout } from "../components/HeroLayout/HeroLayout";
import { RedirectButton } from "../components/RedirectButton";

const Membership = () => {
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
                useLink={true}
                color={"primary"}
              />
            </div>
          </div>
        </HeroLayout>
      </Layout>
    </Page>
  );
};

export default Membership;
