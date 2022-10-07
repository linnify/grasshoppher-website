import { EventsHeader } from "../EventsHeader/EventsHeader";
import React from "react";
import { EventCard } from "../EventCard/EventCard";
import styles from "./Events.module.scss";
import { Parallax } from "react-scroll-parallax";
import { BigText } from "../../BigText";

export const Events = ({ virtualEvents, inPersonEvents }) => {
  const getCards = (events, inPerson = false) => {
    return events.map((event, index) => (
      <EventCard key={index} event={event} index={index} inPerson={inPerson} />
    ));
  };

  return (
    <div style={{ position: "relative" }}>
      <EventsHeader
        title={"Monthly virtual events"}
        description={
          "Connect with industry experts and a network of leaders to catapult you into your dreams, GrasshoppHer."
        }
        buttonTitle={"See all"}
        buttonLink={"/events/virtual"}
      />
      <div className={`${styles["events"]}`}>{getCards(virtualEvents)}</div>
      <div className={`${styles["big-text"]}`}>
        <Parallax speed={10} translateY={[20, -120]}>
          <BigText text={"Brave"} />
        </Parallax>
      </div>
      <EventsHeader
        title={"Monthly in-person events"}
        description={
          "Connect with industry experts and a network of leaders to catapult you into your dreams, GrasshoppHer."
        }
        buttonTitle={"See all"}
        buttonLink={"/events/in-person"}
      />

      <div className={`${styles["events"]}`}>
        {getCards(inPersonEvents, true)}
      </div>
      <EventsHeader
        title={"Upcoming Event"}
        description={
          "Connect with industry experts and a network of leaders to catapult you into your dreams, GrasshoppHer."
        }
        buttonTitle={"See all"}
        buttonLink={"/events/upcoming"}
      />
    </div>
  );
};
