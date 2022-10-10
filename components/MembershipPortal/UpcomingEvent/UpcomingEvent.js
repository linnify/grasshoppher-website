import React from "react";
import { PageTitle } from "../../PageTitle";
import styles from "./UpcomingEvent.module.scss";
import { RedirectButton } from "../../RedirectButton";
import { Parallax } from "react-scroll-parallax";
import { useDeviceSize } from "../../../hooks/use-device-size.hook";

export const UpcomingEvent = ({ event }) => {
  const getDate = () => {
    const date = new Date(event.date);
    return `${date.getDate()} ${date.toLocaleDateString("default", {
      month: "short",
    })}`;
  };

  const getTime = () => {
    const date = new Date(event.date);

    return date.toLocaleString("default", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };
  const { isMobile } = useDeviceSize();

  return (
    <div className={`${styles["event-container"]}`}>
      <div
        className={`${isMobile ? "container" : ""} ${
          styles["event-container__content"]
        }`}
      >
        <PageTitle content={event.title} />
        <div>
          <h2>{getDate()}</h2>
          <h3>{getTime()}</h3>
        </div>
        <div
          className={`inter1 ${styles["event-container__content__description"]}`}
        >
          {event.description}
        </div>
        <RedirectButton
          label={"Sign Up"}
          href={event.button_link}
          target={true}
          color={"black"}
        />
      </div>
      <div
        className={isMobile ? "container display-center" : ""}
        style={{
          position: "relative",
          width: isMobile ? "" : "600px",
        }}
      >
        {" "}
        <Parallax scale={isMobile ? [1, 1.25] : [0.75, 1]} easing="easeOutCirc">
          <img src={event.image.url} />
        </Parallax>
      </div>
    </div>
  );
};
