import React from "react";
import Link from "next/link";
import { HeaderBurgerMenu } from "./HeaderBurgerMenu";
import { header } from "../constants/header";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";

export const ActiveItem = styled.p`
  cursor: pointer;
  position: relative;
  font-weight: 400;
  font-size: 20px;
  line-height: 15px;
  letter-spacing: 0.07em;

  ${(props) =>
    props.active &&
    css`
      &:after {
        content: "";
        position: absolute;
        background-color: #dbff00;
        width: 100%;
        height: 10px;
        top: 15px;
        left: 0;
      }
    `}
`;
export const Header = () => {
  const router = useRouter();
  const displayMenuItems = () =>
    header.map((item, index) => {
      const isActive = router.asPath === item.path;
      return (
        <Link href={item.path} key={index}>
          <ActiveItem
            active={isActive}
            style={item.computeStyle && item.computeStyle(isActive)}
          >
            {item.label}
          </ActiveItem>
        </Link>
      );
    });

  return (
    <div className={"container"}>
      <div className={"row top-xs between-xs header"}>
        <div className={"logo header__padding-top-30"}>
          <Link href={"/"}>
            <img
              src={"/logos/new-logo.svg"}
              alt={"logo GrasshoppHer"}
              style={{ cursor: "pointer" }}
              className={"logo"}
            />
          </Link>
        </div>
        <div className={"row"}>
          <div className={"web-menu header__padding-top-40"}>
            {displayMenuItems()}
          </div>
          {/*<a*/}
          {/*  href={"https://www.befearlesssummit.org/"}*/}
          {/*  className={"web-menu__promo"}*/}
          {/*  target={"_blank"}*/}
          {/*>*/}
          {/*<img*/}
          {/*  className={"web-menu__promo"}*/}
          {/*  src={"/logos/bfs-grey.jpg"}*/}
          {/*  alt={"logo Be Fearless"}*/}
          {/*  style={{ height: "137px" }}*/}
          {/*/>*/}
          {/*</a>*/}
        </div>
        <div className={"burger-menu"}>
          <HeaderBurgerMenu />
        </div>
      </div>
    </div>
  );
};
