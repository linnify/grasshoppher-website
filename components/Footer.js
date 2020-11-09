import React, {useState} from "react";
import Link from "next/link";
import {socialMedia, references} from "../constants/footer";

export const Footer = () => {

  const displayReferences = references.map((ref, index) => {
    return (
      <Link key={index} href={"#"}>
        <div className={"footer__text"}>{ref.text}</div>
      </Link>
    );
  })

  const displayMedia = socialMedia.map((media, index) => {
    return (
      <a href={media.link} className={"footer__media"} key={index}>
        <img
          src={`${media.icon}`}
          onMouseEnter={e => (e.currentTarget.src = `${media.icon_hover}`)}
          onMouseLeave={e => (e.currentTarget.src = `${media.icon}`)}
        />
      </a>
    );
  })

  return(
    <div className={"footer"}>
      <div className={"container"}>
        <div className={"footer--row"}>
          <div className={"footer__references"}>
            {displayReferences}
          </div>
          <div className={"footer__social-media"}>
            {displayMedia}
          </div>
        </div>
      </div>
    </div>
  );
}