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
import { RedirectToForm } from "../components/MembershipPortal/RedirectToForm/RedirectToForm";
import { ImageSection } from "../components/EBook/ImageSection";
import { CheckEmail } from "../components/MembershipPortal/CheckEmail/CheckEmail";
import { OfficeHours } from "../components/Membership/OfficeHours/OfficeHours";

class MembershipPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailVerified: false,
      virtual: false,
      message: null,
    };
  }

  componentDidMount() {
    this.setState({
      emailVerified: sessionStorage.getItem("emailVerified") === "true",
    });
    this.setState({
      virtual: sessionStorage.getItem("virtual") === "true",
    });
  }

  onCheckEmail = async (email) => {
    const url = `${process.env.NEXT_PUBLIC_HOST}/api/verify-email`;
    try {
      const response = await fetch(url, {
        body: JSON.stringify({
          email: email,
        }),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      sessionStorage.setItem("emailVerified", result.active);
      sessionStorage.setItem("virtual", result.virtual);
      this.setState({
        emailVerified: result.active,
        virtual: result.virtual,
        message: result.active
          ? null
          : "You don’t have an active GrasshoppHer Membership subscription.",
      });
    } catch (e) {
      this.setState({
        message: "An error occurred. Please try again.",
      });
    }
  };

  getContent = () => {
    if (this.state.emailVerified) {
      return (
        <>
          <MembershipPortalHero />
          <div className={"container"}>
            <Events
              virtualEvents={this.props.virtualEvents}
              inPersonEvents={this.props.inPersonEvents}
              virtual={this.state.virtual}
            />
          </div>
          {!this.state.virtual && this.props.upcomingEvent && (
            <UpcomingEvent event={this.props.upcomingEvent} />
          )}
          <OfficeHours withRedirect={true} />
          <Discounts
            discounts={this.props.discounts}
            virtual={this.state.virtual}
          />
          <RedirectToForm />
          <RedirectToForm
            title={
              "We want to hear what you want to learn about.\n" +
              "Share your thoughts with us."
            }
            buttonTitle={"Tell us more"}
            alignRight={true}
            path={"/tell-us-more"}
          />
          <ImageSection
            title={"Join\n" + "our\n" + "slack\n" + "community"}
            description={
              "Don’t miss your chance to become the GrasshoppHer you want to be!"
            }
            buttonTitle={"join now"}
            buttonLink={"https://grasshopphergroup.slack.com/ssb/redirect#/"}
            imageUrl={"/images/slack.png"}
            displayBigText={true}
          />
        </>
      );
    }
    return (
      <CheckEmail
        message={this.state.message}
        onCheckEmail={this.onCheckEmail}
      />
    );
  };

  render() {
    return (
      <Page title={"Membership Portal - GrasshoppHer"}>
        <Layout
          title={"Membership Portal"}
          withouthFooter={!this.state.emailVerified}
        >
          {this.getContent()}
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
  const filteredUpcomingEvents = upcomingEvents.filter(
    (event) => new Date(event.date).getTime() >= new Date().getTime()
  );

  return {
    props: {
      inPersonEvents: inPersonEvents
        .filter((event) => {
          return new Date(event.date).getTime() >= new Date().getTime();
        })
        .slice(0, 2),
      virtualEvents: virtualEvents
        .sort((a, b) => {
          return (
            new Date(b.published_at).getTime() -
            new Date(a.published_at).getTime()
          );
        })
        .slice(0, 2),
      upcomingEvent:
        filteredUpcomingEvents.length > 0 ? filteredUpcomingEvents[0] : null,
      discounts: discounts,
    },
  };
}

export default MembershipPortal;
