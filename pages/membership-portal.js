import React from "react";
import Page from "../components/Page";
import Layout from "../components/Layout";
import { MembershipPortalHero } from "../components/MembershipPortal/MembershipPortalHero/MembershipPortalHero";
import { Events } from "../components/MembershipPortal/Events/Events";
import {
  getDiscounts,
  getInPersonEvents,
  getUpcomingEvents,
  getVirtualEvents,
} from "../src/services/datafycms";
import { UpcomingEvent } from "../components/MembershipPortal/UpcomingEvent/UpcomingEvent";
import { Discounts } from "../components/MembershipPortal/Discounts/Discounts";
import { SignUp } from "../components/MembershipPortal/SignUp/SignUp";
import { EBook } from "../components/EBook/EBook";

class MembershipPortal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page title={"Membership Portal - GrasshoppHer"}>
        <Layout title={"Membership Portal"}>
          <MembershipPortalHero />
          <div className={"container"}>
            <Events
              virtualEvents={this.props.virtualEvents}
              inPersonEvents={this.props.inPersonEvents}
            />
          </div>
          <UpcomingEvent event={this.props.upcomingEvent} />
          <Discounts discounts={this.props.discounts} />
          <SignUp />
          <EBook
            title={"Join\n" + "our\n" + "slack\n" + "community"}
            description={
              "Join the community and don’t miss any chance in becoming the GrasshoppHer you want to be"
            }
            buttonTitle={"join now"}
            buttonLink={"https://grasshopphergroup.slack.com/ssb/redirect#/"}
            imageUrl={"/images/slack.png"}
            displayBigText={true}
          />
        </Layout>
      </Page>
    );
  }
}
export async function getStaticProps() {
  const inPersonEvents = await getInPersonEvents();
  const virtualEvents = await getVirtualEvents();
  const upcomingEvents = await getUpcomingEvents();
  const discounts = await getDiscounts();
  return {
    props: {
      inPersonEvents: inPersonEvents.slice(0, 2),
      virtualEvents: virtualEvents.slice(0, 2),
      upcomingEvent: upcomingEvents[0],
      discounts: discounts,
    },
  };
}

export default MembershipPortal;
