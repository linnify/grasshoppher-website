import React from "react";
import Link from "next/link";

export const RedirectButton = ({
  href,
  label,
  target,
  variant = "contained",
  color = "primary",
  asButton = false,
  useLink = false,
  onClick,
}) => {
  if (asButton) {
    return (
      <div
        className={`button button__${variant} button__${variant}--${color}`}
        onClick={onClick}
      >
        <span>{label}</span>
      </div>
    );
  }
  if (useLink) {
    return (
      <Link href={href}>
        <div
          className={`button button__${variant} button__${variant}--${color}`}
          onClick={onClick}
        >
          <span>{label}</span>
        </div>
      </Link>
    );
  }
  return (
    <a
      href={href}
      target={`${target ? "_blank" : ""}`}
      style={{ display: "inline-flex", width: "fit-content" }}
    >
      <div className={`button button__${variant} button__${variant}--${color}`}>
        <span>{label}</span>
      </div>
    </a>
  );
};
