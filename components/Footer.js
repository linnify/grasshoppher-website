import React from "react";
import Link from "next/link";
import {socialMedia, legalFooterItems, menuFooterItems} from "../constants/footer";

export const Footer = () => {

  const legalItems = legalFooterItems.map((ref, index) => {
    return (
      <Link key={index} href={ref.link}>
        <div className={"footer__menu-text"}>{ref.text}</div>
      </Link>
    );
  })

  const menuItems = menuFooterItems.map((item, index) => {
    const isContact = item.text === 'Contact'
    return (
      <a href={item.link} className={""} key={index} target={isContact ? "" : "_blank"}>
        <div className={"footer__menu-text"}>{item.text}</div>
      </a>
    )
  })

  const displayMedia = socialMedia.map((media, index) => {
    return (
      <a href={media.link} className={"footer__media-item"} key={index} target={"_blank"}>
        <img
          src={`${media.icon}`}
          style={{ width: '36px', height: '28px' }}
          onMouseEnter={e => (e.currentTarget.src = `${media.icon_hover}`)}
          onMouseLeave={e => (e.currentTarget.src = `${media.icon}`)}
        />
      </a>
    );
  })

  return(
    <div className={"footer"}>
      <div className={"container"}>
        <div className={"footer--menu"}>
          <div className={'footer--menu-links'}>
            <div className={"footer__menu-col"}>
              {legalItems}
            </div>
            <div className={"footer__menu-col"}>
              {menuItems}
            </div>
          </div>
          <div>
            {displayMedia}
          </div>
        </div>
        <div className={"footer__copyright"}>
          <a href={"https://linnify.com"} target={"_blank"}>
            <img
              src={"/linnify-logo-gray.svg"}
              onMouseEnter={e => (e.currentTarget.src = ("/linnify-logo.svg"))}
              onMouseLeave={e => (e.currentTarget.src = ("/linnify-logo-gray.svg"))}
              alt={"Linnify logo"}
            />
          </a>
          Copyright © 2020 <a href={"https://linnify.com"} target={"_blank"}>Linnify. </a> All
          rights reserved.
        </div>
      </div>
    </div>
  );
}
