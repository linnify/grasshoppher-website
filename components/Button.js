import React from "react";
import Link from "next/link";

export const Button = ({href, label, target, variant = "contained", color = "primary"}) => {
  return (
    <Link href={href}>
      <a target={`${target ? "_blank" : ""}`}>
        <div className={`button button__${variant} button__${variant}--${color}`}>
          {label}
        </div>
      </a>
    </Link>
  );
}
