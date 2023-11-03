import React from "react";
import Link from "next/link";
import { CircularProgress } from "@material-ui/core";

export const RedirectButton = ({
  href,
  label,
  target,
  variant = "contained",
  color = "primary",
  asButton = false,
  useLink = false,
  loading = false,
  onClick,
}) => {
  if (asButton) {
    return (
      <div
        className={`button button__${variant} button__${variant}--${color}`}
        onClick={onClick}
        style={{
          position: loading ? "relative" : "",
        }}
      >
        <CircularProgress
          style={{
            visibility: loading ? "visible" : "hidden",
            position: "absolute",
            margin: "auto",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          size={"12px"}
        ></CircularProgress>
        <span
          style={{
            visibility: loading ? "hidden" : "visible",
          }}
        >
          {label}
        </span>
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
