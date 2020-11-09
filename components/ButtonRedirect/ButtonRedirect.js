import React from "react";
import Link from "next/link";

export const ButtonRedirect = ({ href, text }) => {
  return (
    <div className={"button-redirect"}>
      <Link href={href}>
        <a>{text}</a>
      </Link>
    </div>
  );
}