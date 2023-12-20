import {
  getInPersonEvents,
  getUpcomingEvents,
  getVirtualEvents,
} from "../../../src/services/datafycms";
import Page from "../../../components/Page";
import Layout from "../../../components/Layout";
import React from "react";
import { AllEvents } from "../../../components/Events/AllEvents/AllEvents";
import { CheckEmail } from "../../../components/MembershipPortal/CheckEmail/CheckEmail";

class Events extends React.Component {
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
      emailVerified:
        sessionStorage.getItem("emailVerified") === "true" &&
        (sessionStorage.getItem("virtual") !== "true" ||
          this.props.title === "virtual"),
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
      this.setState({
        emailVerified:
          result.active && (!result.virtual || this.props.title === "virtual"),
        virtual: result.virtual,
        message: result.active
          ? result.virtual && this.props.title !== "virtual"
            ? "You are able to see only virtual events"
            : null
          : "You don’t have an active GrasshoppHer Membership subscription.",
      });
    } catch (e) {
      this.setState({
        message: "An error occurred. Please try again.",
      });
    }
  };

  getContent = () => {
    if (!this.state.emailVerified) {
      return (
        <CheckEmail
          message={this.state.message}
          onCheckEmail={this.onCheckEmail}
        />
      );
    }
    return <AllEvents title={this.props.title} events={this.props.events} />;
  };

  render() {
    return (
      <Page title={"Events - GrasshoppHer"}>
        <Layout title={"Events"} withouthFooter={!this.state.emailVerified}>
          {this.getContent()}
        </Layout>
      </Page>
    );
  }
}

export const getStaticPaths = async () => {
  const types = ["in-person", "virtual", "upcoming"];

  const paths = types.map((type) => {
    return {
      params: {
        type: type,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const type = context.params.type;
  let events = [];
  let title = "";
  switch (type) {
    case "in-person": {
      events = await getInPersonEvents();
      break;
    }
    case "virtual": {
      events = await getVirtualEvents();
      break;
    }
    case "upcoming": {
      events = await getUpcomingEvents();
      break;
    }
  }

  return {
    props: {
      title: type,
      events: events,
    },
  };
};

export default Events;
