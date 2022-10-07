import {
  getInPersonEvents,
  getUpcomingEvents,
  getVirtualEvents,
} from "../../src/services/datafycms";
import Page from "../../components/Page";
import Layout from "../../components/Layout";
import React from "react";
import { AllEvents } from "../../components/Events/AllEvents/AllEvents";

const Events = ({ events, title }) => {
  return (
    <Page title={"Events - GrasshoppHer"}>
      <Layout title={"Events"}>
        <AllEvents title={title} events={events} />
      </Layout>
    </Page>
  );
};

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
