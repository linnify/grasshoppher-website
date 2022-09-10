import Page from "../components/Page";
import Layout from "../components/Layout";
import {Loader} from "../components/Loader/Loader";
import FadeIn from "../components/FadeIn/FadeIn";
import {PageTitle} from "../components/PageTitle";
import React from "react";
import {HeroLayout} from '../components/HeroLayout/HeroLayout';

const MembershipLanding = () => {
  return (
    <Page title={"Presale Membership - GrasshoppHer"}>
      <Layout title={"Presale Membership"}>
        <HeroLayout backgroundSrc={'/backgrounds/membership-hero.svg'}>
          <FadeIn>
            <div className={'container'}>
              <PageTitle
                content={"Become\na\nGrasshoppHer"}
                id={"general"}
              />
            </div>
          </FadeIn>
        </HeroLayout>
      </Layout>
    </Page>
  )
}

export default MembershipLanding;