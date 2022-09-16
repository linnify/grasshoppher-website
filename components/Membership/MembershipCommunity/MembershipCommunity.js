import React, { useEffect, useMemo, useState } from "react";
import styles from "./MembershipCommunity.module.scss";
import { HighlightedText } from "../../HighlightedText/HighlightedText";
import { RedirectButton } from "../../RedirectButton";
import { Parallax } from "react-scroll-parallax";

export const MembershipCommunity = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);

      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isMobile = useMemo(() => windowSize.width < 768, [windowSize]);
  return (
    <div className={styles["membership-community"]}>
      <div className={`container ${styles["membership-community__content"]}`}>
        <HighlightedText
          text={"Wondering if this\nis the community for you?"}
        />
        <div className={styles["membership-community__questions__wrapper"]}>
          <div className={styles["membership-community__text"]}>
            If you put a finger down to most of these questions, then yes, it
            is!
          </div>
          <div
            className={`${styles["membership-community__questions"]} inter2`}
          >
            <div>
              Feeling stuck? Or lookin' for career love in all the wrong places?
            </div>
            <div>Ready to leap on over to the next phase of your journey?</div>
            <div>
              Eager to connect with thought leaders? (But tired of cold
              messaging them on LinkedIn?)
            </div>
          </div>
        </div>
        <RedirectButton
          label={"Join GrasshoppHer"}
          target={false}
          href={"/membership"}
        />
      </div>
      <div className={styles["membership-community__image"]}>
        <div className={styles["membership-community__image__wrapper"]}>
          <Parallax scale={[1, 1.3]} easing="easeInQuad">
            <img
              style={{
                objectFit: isMobile ? "unset" : "cover",
              }}
              src={
                isMobile
                  ? "/images/community-mobile.png"
                  : "/images/community.png"
              }
            />
          </Parallax>
        </div>
      </div>
    </div>
  );
};
