import React from "react";

export const RedirectButton = ({href, label, target, variant = "contained", color = "primary"}) => {
  return (
    <a href={href} target={`${target ? "_blank" : ""}`} style={{display: 'inline-flex'}}>
      <div className={`button button__${variant} button__${variant}--${color}`}>
        <span>{label}</span>
      </div>
    </a>
  );
}
