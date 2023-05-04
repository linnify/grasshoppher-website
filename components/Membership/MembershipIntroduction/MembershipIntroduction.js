import React from "react";
import styles from "./MembershipIntroduction.module.scss";
import { RedirectButton } from "../../RedirectButton";
import { Parallax } from "react-scroll-parallax";
import { useDeviceSize } from "../../../hooks/use-device-size.hook";

export const MembershipIntroduction = () => {
  const { isMobile } = useDeviceSize();

  return (
    <div className={styles["membership-introduction"]}>
      <div
        className={`${styles["membership-introduction__left"]} ${styles["membership-introduction__half"]}`}
      >
        <h3>
          We’ve analyzed other membership communities and developed a community
          that has been carefully curated to help you reach your full potential.
        </h3>
        <div className={"inter1 white-space-break"}>
          {
            "Between our highly vetted role models and professional leaders, upskilling events, and a community of engaged peers, you've got access to the dream team. Literally.\n\nJoin GrasshoppHer. Together, we can disrupt the status quo and you can become the person you want to be."
          }
        </div>
        <RedirectButton
          label={"Join GrasshoppHer"}
          target={false}
          href={"/membership"}
        />
      </div>
      <div
        className={`${styles["membership-introduction__right"]} ${styles["membership-introduction__half"]}`}
      >
        <Parallax translateY={[50, 0]} disabled={isMobile}>
          <div
            className={`white-space-break ${styles["membership-introduction__title-1"]}`}
          >
            {"Memberships\ninclude"}
          </div>
          <div
            className={
              styles["membership-introduction__right__sections-wrapper"]
            }
          >
            <div
              className={`${styles["membership-introduction__right__section"]}`}
            >
              <Parallax
                translateX={[-50, 0]}
                disabled={!isMobile}
                easing={"easeOutExpo"}
              >
                <div
                  className={styles["membership-introduction__title-2"]}
                  style={{ marginBottom: "20px", paddingLeft: "11px" }}
                >
                  Virtual
                </div>
              </Parallax>
              <div
                className={`white-space-break ${styles["membership-introduction__box"]} ${styles["membership-introduction__box__text"]}`}
              >
                {"Monthly skill-building events led by gamechangers like Kelly Rutherford, Mandy Teefey, and Allison Kaye\n" +
                  "\n" +
                  "An engaged and inspiring virtual community\n" +
                  "\n" +
                  "Biweekly member updates with leveling up tips and tricks \n" +
                  "\n" +
                  "Opportunities to speak at a summit or lead your own talk\n" +
                  "\n" +
                  "Discounts + perks to help along your journey with partners like 99Designs, Moo.com & more!\n" +
                  "\n" +
                  "Office hours with the founders for career advice and more"}
              </div>
            </div>
            <div
              className={`${styles["membership-introduction__right__section"]}`}
            >
              {/*<Parallax*/}
              {/*  translateX={[-50, 0]}*/}
              {/*  disabled={!isMobile}*/}
              {/*  easing={"easeOutExpo"}*/}
              {/*>*/}
              {/*  <div className={styles["membership-introduction__title-2"]}>*/}
              {/*    Austin*/}
              {/*  </div>*/}
              {/*  <div*/}
              {/*    className={styles["membership-introduction__subtitle"]}*/}
              {/*    style={{ marginBottom: "16px" }}*/}
              {/*  >*/}
              {/*    *NEW CHAPTERS COMING SOON*/}
              {/*  </div>*/}
              {/*</Parallax>*/}
              {/*  <div*/}
              {/*    className={`white-space-break ${styles["membership-introduction__box__text"]}`}*/}
              {/*  >*/}
              {/*    {"Everything in the Virtual membership Plus: \n" +*/}
              {/*      "\n" +*/}
              {/*      "Monthly in-person networking events with industry professionals and recruiters\n" +*/}
              {/*      "\n" +*/}
              {/*      "Local perks and discounts"}*/}
              {/*  </div>*/}
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};
