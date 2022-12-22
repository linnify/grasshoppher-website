import React from "react";
import { HighlightedText } from "../../HighlightedText/HighlightedText";
import { RedirectButton } from "../../RedirectButton";

export const RedirectToForm = ({ title, buttonTitle, path, alignRight }) => {
  return (
    <div
      className={"container"}
      style={{
        gap: "64px",
        display: "flex",
        flexDirection: "column",
        marginTop: "200px",
        marginBottom: "200px",
        alignItems: alignRight ? "end" : "",
      }}
    >
      <HighlightedText
        text={
          title ||
          "We want to put you on a pedestal.\nShare current project and collab opportunities."
        }
      />
      <RedirectButton
        label={buttonTitle || "Sign Up"}
        href={path || "/collab"}
        useLink={true}
        target={false}
        color={"primary"}
      />
    </div>
  );
};
