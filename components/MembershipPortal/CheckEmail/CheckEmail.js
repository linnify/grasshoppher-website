import React, { useState } from "react";
import styles from "./CheckEmail.module.scss";
import { HeroLayout } from "../../HeroLayout/HeroLayout";
import { TextField } from "@material-ui/core";
import { RedirectButton } from "../../RedirectButton";

export const CheckEmail = ({ message, onCheckEmail }) => {
  const [email, setEmail] = useState(null);

  return (
    <HeroLayout
      className={`${styles["content"]}`}
      backgroundSrc={"/backgrounds/email-verification.png"}
    >
      <div className={`${styles["card"]} content-position`}>
        <div className={`${styles["card__left"]}`}>
          <img src={"/logos/new-logo.svg"} alt={"logo GrasshoppHer"} />
          <span className={`inter1`}>
            GrasshoppHer is a career roadmapping platform and community,
            designed to connect you with industry leaders and empower you to
            reach your fullest, brightest potential.
          </span>
        </div>
        <div className={`${styles["card__right"]}`}>
          <h3>Welcome</h3>
          <span className={`inter1`}>
            Please enter the email address on file for your GrasshoppHer
            Membership subscription.
          </span>
          <TextField
            label="Enter your email address"
            variant="outlined"
            value={email}
            onChange={(email) => setEmail(email.target.value)}
          />
          {message && <span className={`inter1`}>{message}</span>}
          <RedirectButton
            label={"Login"}
            asButton={true}
            onClick={() => onCheckEmail(email)}
          />
        </div>
      </div>
    </HeroLayout>
  );
};
