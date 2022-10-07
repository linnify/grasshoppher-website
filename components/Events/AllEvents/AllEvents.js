import React from "react";
import styles from "./AllEvents.module.scss";
import { HighlightedText } from "../../HighlightedText/HighlightedText";
import { EventCard } from "../../MembershipPortal/EventCard/EventCard";
export const AllEvents = ({ events, title }) => {
  const getCards = (events, inPerson = false) => {
    return events.map((event, index) => (
      <EventCard key={index} event={event} index={index} inPerson={inPerson} />
    ));
  };
  const inPerson = title === "in-person";
  return (
    <div className={`container ${styles["page-min-height"]}`}>
      <HighlightedText text={`${title} events`} />
      <div className={`${styles["events"]}`}>{getCards(events, inPerson)}</div>
    </div>
  );
};
