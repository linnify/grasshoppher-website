import React from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import { header } from "../constants/header";
import { ActiveItem } from "./Header";
import { useRouter } from "next/router";

export const HeaderBurgerMenu = () => {
  const router = useRouter();

  const displayMenuItems = header.map((item, index) => {
    const isActive = router.asPath === item.path;
    return (
      <div className={"menu-item"} key={index}>
        <Link href={item.path}>
          <ActiveItem
            active={isActive}
            style={item.computeStyle && item.computeStyle(isActive)}
          >
            {item.label}
          </ActiveItem>
        </Link>
      </div>
    );
  });

  return (
    <Menu right={true}>
      <div>
        <Link href={"/"}>
          <img
            src={"/logos/logo.svg"}
            alt={"logo GrasshoppHer"}
            style={{ marginBottom: "40px" }}
            className={"logo"}
          />
        </Link>
      </div>
      {displayMenuItems}
      <Link href={"https://www.befearlesssummit.org/"}>
        <img
          src={"/logos/be-fearless-promo.jpeg"}
          alt={"logo Be Fearless"}
          style={{ cursor: "pointer", height: "177px", marginTop: "30px" }}
          className={"web-menu__promo"}
        />
      </Link>
    </Menu>
  );
};
