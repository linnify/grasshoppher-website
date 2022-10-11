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
        marginTop: "200px",
        marginBottom: "200px",
      }}
    >
      <HighlightedText
        text={
          "We want to put you on a pedestal.\nShare current project and collab  opportunities."
        }
      />
      <RedirectButton
        label={"Sign Up"}
        href={"https://forms.gle/MoqSb5Y3P6kKGLLy5"}
        target={true}
        color={"primary"}
      />
    </div>
  );
};
