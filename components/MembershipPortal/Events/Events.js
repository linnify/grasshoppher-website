import { EventsHeader } from "../EventsHeader/EventsHeader";
import React from "react";
import { EventCard } from "../EventCard/EventCard";
import styles from "./Events.module.scss";
import { Parallax } from "react-scroll-parallax";
import { BigText } from "../../BigText";

export const Events = ({ virtualEvents, inPersonEvents, virtual }) => {
  const getCards = (events, inPerson = false) => {
    return events.map((event, index) => (
      <EventCard key={index} event={event} index={index} inPerson={inPerson} />
    ));
  };

  return (
    <div style={{ position: "relative" }}>
      <EventsHeader
        title={"The Hub"}
        description={
          "Connect with industry experts and a network of leaders to catapult you into your dreams."
        }
        buttonTitle={"See all"}
        buttonLink={"/events/virtual"}
      />
      <div className={`${styles["events"]}`}>{getCards(virtualEvents)}</div>

      {!virtual && (
        <>
          <div className={`${styles["big-text"]}`}>
            <Parallax speed={10} translateY={[20, -120]}>
              <BigText text={"Brave"} />
            </Parallax>
          </div>{" "}
          {/*<EventsHeader*/}
          {/*  title={"Monthly in-person events"}*/}
          {/*  description={*/}
          {/*    "We’re live in Austin (new locations launching in 2023). Join us for fun, budding friendships, and some good ol’ fashioned career road-mapping. We’ll help you leap to your next goal."*/}
          {/*  }*/}
          {/*  buttonTitle={"See all"}*/}
          {/*  buttonLink={"/events/in-person"}*/}
          {/*/>*/}
          {/*<div className={`${styles["events"]}`}>*/}
          {/*  {getCards(inPersonEvents, true)}*/}
          {/*</div>*/}
          <EventsHeader
            title={"Upcoming Event"}
            description={"Looking to level-up in the near future? We got you."}
            buttonTitle={"See all"}
            buttonLink={"/events/upcoming"}
          />
        </>
      )}
    </div>
  );
};
