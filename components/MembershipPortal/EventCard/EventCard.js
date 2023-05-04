import React, { useEffect } from "react";
import { RedirectButton } from "../../RedirectButton";
import styles from "./EventCard.module.scss";
import { useDeviceSize } from "../../../hooks/use-device-size.hook";
export const EventCard = ({ event, index, inPerson }) => {
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

  useEffect(() => {
    const description = document.getElementById(
      `content-description-${event.id}`
    );
    const container = document.getElementById(
      `container-description-${event.id}`
    );

    if (description.offsetHeight > container.offsetHeight) {
      description.classList.add("animate");
      description.style.marginTop = `${container.offsetHeight}px`;
    }
  }, []);

  return (
    <div
      className={`${styles["event-container"]}`}
      style={{
        marginTop:
          !isMobile &&
          ((index % 2 === 1 && !inPerson) || (inPerson && index % 2 === 0))
            ? "24px"
            : 0,
      }}
    >
      {event.data && (
        <div
          className={`${
            inPerson ? styles["event-container__date-in-person"] : ""
          }
            ${styles["event-container__date"]}
        }`}
        >
          <h3>{getDate()}</h3>
          <span>{getTime()}</span>
        </div>
      )}
      <img
        className={`${
          inPerson ? styles["event-container__image-in-person"] : ""
        }
            ${styles["event-container__image"]}`}
        src={event.image.url}
        alt={"card image"}
        width={inPerson ? 368 : 432}
        height={300}
      />
      <div
        className={`${
          inPerson ? styles["event-container__content-in-person"] : ""
        }
            ${styles["event-container__content"]}
        `}
      >
        <div className={`full-width ${inPerson ? "color-white" : ""}`}>
          <h3>{event.title}</h3>
        </div>
        <div
          id={`container-description-${event.id}`}
          className={`inter1 ${
            styles["event-container__content__description"]
          } ${inPerson ? "color-white" : ""}`}
        >
          <p
            id={`content-description-${event.id}`}
            className={"scrolling-text"}
          >
            {event.description}
          </p>
        </div>

        <div
          className={`full-width ${styles["event-container__content__button"]}`}
        >
          {event.button_link && (
            <RedirectButton
              label={event.button_text || "Sign Up"}
              href={event.button_link}
              target={true}
              color={inPerson ? "primary" : "black"}
            />
          )}
        </div>
      </div>
    </div>
  );
};
