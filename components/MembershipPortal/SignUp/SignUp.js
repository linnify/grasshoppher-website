import React from "react";
import { HighlightedText } from "../../HighlightedText/HighlightedText";
import { RedirectButton } from "../../RedirectButton";

export const SignUp = () => {
  return (
    <div
      className={"container"}
      style={{
        gap: "64px",
        display: "flex",
        flexDirection: "column",
        marginBottom: "200px",
      }}
    >
      <HighlightedText
        text={
          "We want to put you on a pedestal.\n Share current project and collab  opportunities."
        }
      />
      <RedirectButton
        label={"Sign Up"}
        href={
          "https://docs.google.com/forms/d/e/1FAIpQLScJhoNzVv2A5p0e979itmtgvVPz2LdYe91iPWESZBLYjIb2Gg/viewform "
        }
        target={true}
        color={"primary"}
      />
    </div>
  );
};
