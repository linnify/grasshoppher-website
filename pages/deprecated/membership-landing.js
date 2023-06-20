import Page from "../../components/Page";
import Layout from "../../components/Layout";
import React from "react";
import { MembershipHero } from "../../components/Membership/MembershipHero/MembershipHero";
import { MembershipIntroduction } from "../../components/Membership/MembershipIntroduction/MembershipIntroduction";
import { MembershipYourFuture } from "../../components/Membership/MembershipYourFuture/MembershipYourFuture";
import { MembershipTestimonials } from "../../components/Membership/MembershipTestimonials/MembershipTestimonials";
import { MembershipCommunity } from "../../components/Membership/MembershipCommunity/MembershipCommunity";
import { OfficeHours } from "../../components/Membership/OfficeHours/OfficeHours";

const MembershipLanding = () => {
  return (
    <Page title={"Presale Membership - GrasshoppHer"}>
      <Layout title={"Presale Membership"}>
        <MembershipHero />
        <div className={"container"}>
          <MembershipIntroduction />
        </div>
        <OfficeHours />
        <MembershipCommunity />
        <MembershipTestimonials />
        <div className={"container"}>
          <MembershipYourFuture />
        </div>
      </Layout>
    </Page>
  );
};

export default MembershipLanding;
