import Page from "../components/Page";
import Layout from "../components/Layout";
import React from "react";
import {MembershipHero} from '../components/Membership/MembershipHero';

const MembershipLanding = () => {
  return (
    <Page title={"Presale Membership - GrasshoppHer"}>
      <Layout title={"Presale Membership"}>
        <MembershipHero />
      </Layout>
    </Page>
  )
}

export default MembershipLanding;