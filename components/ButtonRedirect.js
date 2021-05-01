import React from "react";
import Link from "next/link";

export const ButtonRedirect = ({ href, text, target, id }) => {
  return (
    <div className={"button-redirect"} id={id}>
      <Link href={href}>
        <a target={`${target ? "_blank" : ""}`}>{text}</a>
      </Link>
    </div>
  );
}
