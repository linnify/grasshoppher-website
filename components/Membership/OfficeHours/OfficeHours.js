import React from "react";
import styles from "./OfficeHours.module.scss";
import { EventsHeader } from "../../MembershipPortal/EventsHeader/EventsHeader";
export const OfficeHours = ({ withRedirect }) => {
  return (
    <div>
      <div className={"container"}>
        <EventsHeader
          title={"Office hours with the founders"}
          description={
            "Tune in Wednesdays and Fridays to ask founders Heather and Alexa questions about your career path, business and more!"
          }
        />
      </div>
      <div className={`${styles["card"]}`}>
        <div
          style={{ display: "flex", paddingLeft: "48px" }}
          className={`${styles["card__texts"]}`}
        >
          <div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <h3>Wednesdays at 1pm CT</h3>
              {withRedirect ? (
                <a
                  href={"https://grasshopphergroup.slack.com/ssb/redirect#/"}
                  target={"_blank"}
                >
                  <img
                    src={"/icons/slack.svg"}
                    width={20}
                    height={20}
                    alt={"slack"}
                  />
                </a>
              ) : (
                <img
                  src={"/icons/slack.svg"}
                  width={20}
                  height={20}
                  alt={"slack"}
                />
              )}
            </div>
            <div className={"inter1"}>
              with Heather on Slack channel #office-hours
            </div>
          </div>
          <div>
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <h3>Fridays at 12pm CT</h3>
              {withRedirect ? (
                <a
                  href={"https://www.instagram.com/grasshoppher"}
                  target={"_blank"}
                >
                  <img
                    src={"/footer/instagram.svg"}
                    width={20}
                    height={20}
                    alt={"instagram"}
                  />
                </a>
              ) : (
                <img
                  src={"/footer/instagram.svg"}
                  width={20}
                  height={20}
                  alt={"instagram"}
                />
              )}
            </div>
            <div className={"inter1"}>with Alexa on Instagram live</div>
          </div>
        </div>
        <img
          className={`${styles["card__image"]}`}
          style={{
            marginTop: "48px",
            marginBottom: "-124px",
          }}
          src={"/images/office-hours.png"}
          alt={"office-hours"}
          height={"538px"}
          width={"100%"}
        />
      </div>
    </div>
  );
};
