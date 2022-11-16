import React from "react";
import Link from "next/link";
import {
  socialMedia,
  legalFooterItems,
  menuFooterItems,
  copyrightFooterItems,
} from "../constants/footer";

export const Footer = () => {
  const legalItems = legalFooterItems.map((item, index) => {
    return (
      <Link key={index} href={item.link} target={item.newTab ? "_blank" : ""}>
        <div className={"footer__menu-text"}>{item.text}</div>
      </Link>
    );
  });

  const menuItems = menuFooterItems.map((item, index) => {
    return (
      <a
        href={item.link}
        className={""}
        key={index}
        target={item.newTab ? "_blank" : ""}
      >
        <div className={"footer__menu-text"}>{item.text}</div>
      </a>
    );
  });

  const copyrightItems = copyrightFooterItems.map((item, index) => {
    return (
      <a
        href={item.link}
        className={""}
        key={index}
        target={item.newTab ? "_blank" : ""}
      >
        <div className={"footer__menu-text"}>{item.text}</div>
      </a>
    );
  });

  const displayMedia = socialMedia.map((media, index) => {
    return (
      <a
        href={media.link}
        className={"footer__media-item"}
        key={index}
        target={"_blank"}
      >
        <img
          src={`${media.icon}`}
          style={{ width: "20px", height: "21px" }}
          onMouseEnter={(e) => (e.currentTarget.src = `${media.icon_hover}`)}
          onMouseLeave={(e) => (e.currentTarget.src = `${media.icon}`)}
        />
      </a>
    );
  });

  return (
    <div className={"footer"}>
      <div className={"container"}>
        <Link href={"/"}>
          <img
            src={"/logos/new-logo.svg"}
            alt={"logo GrasshoppHer"}
            style={{ cursor: "pointer" }}
            className={"logo"}
          />
        </Link>
        <div className={"footer__menu"}>
          <img
            src={"/brave_bold_boundless.svg"}
            alt={"Brave Bold Boundless"}
            style={{ cursor: "pointer", height: "102px" }}
          />
          <div>{displayMedia}</div>
          <div className={"footer__menu-links"}>
            <div className={"footer__menu-col"}>{menuItems}</div>
          </div>
          <div className={"footer__menu-links"}>
            {" "}
            <div className={"footer__menu-col"}>
              {legalItems} {copyrightItems}
              <div
                className={"footer__menu-simple-text"}
                style={{ display: "flex", flexFlow: "row wrap", gap: "4px" }}
              >
                For questions regarding membership and billing, contact{" "}
                <a href="mailto:outreach@grasshoppher.com">
                  <div className={"footer__menu-text"}>
                    outreach@grasshoppher.com
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div>
            <div
              className={"footer__menu-col "}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "4px",
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
              }}
            >
              <a href={"https://linnify.com"} target={"_blank"}>
                <img
                  src={"/linnify-logo.svg"}
                  alt={"Linnify logo"}
                  height={24}
                  width={24}
                />
              </a>
              Copyright © 2022{" "}
              <a href={"https://linnify.com"} target={"_blank"}>
                Linnify
              </a>{" "}
              All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
