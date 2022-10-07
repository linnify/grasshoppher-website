import React from "react";
import { PageTitle } from "../../PageTitle";
import { HeroLayout } from "../../HeroLayout/HeroLayout";
import styles from "./MembershipPortalHero.module.scss";

export const MembershipPortalHero = () => {
  return (
    <HeroLayout
      className={"min-height-auto"}
      backgroundSrc={"/backgrounds/membership-hero.svg"}
    >
      <div className={`container ${styles["membership-portal-hero"]}`}>
        <PageTitle content={"Welcome\nto GrasshoppHer"} />
        <div className={`inter1 ${styles["membership-portal-hero__text"]}`}>
          Connect with industry experts and a network of leaders to catapult you
          into your dreams, GrasshoppHer.{" "}
        </div>
      </div>
    </HeroLayout>
  );
};
