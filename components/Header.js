import React from "react";
import Link from "next/link";
import {HeaderBurgerMenu} from "./HeaderBurgerMenu";
import {header} from "../constants/header";
import styled, { css } from "styled-components";
import {useRouter} from "next/router";

export const ActiveItem = styled.p`
  cursor: pointer;
  position: relative;
  font-weight: 400;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: 0.07em;
  
  ${props => props.active && css`
    &:after {
      content: '';
      position: absolute;
      background-color: #DBFF00;
      width: 100%;
      height: 10px;
      top: 15px;
      left: 0;
    }`}
`
export const Header = () => {
    const router = useRouter()
    const displayMenuItems = () => header.map((item, index) => {
            return <Link href={item.path} key={index}>
                <ActiveItem active={item.path === '/'
                    ? router.asPath === item.path
                    : router.asPath.includes(item.path)} style={item.style}>{item.label}</ActiveItem>
            </Link>
        }
    )

    return <div className={"container"}>
        <div className={"row top-xs between-xs header"}>
            <div className={"logo header__padding-top-30"}>
                <Link href={"/"}>
                    <img src={"/logos/logo.svg"} alt={"logo GrasshoppHer"} style={{cursor: "pointer"}}
                         className={"logo"}/>
                </Link>
            </div>
            <div className={"row"}>
                <div className={"web-menu header__padding-top-40"}>
                    {displayMenuItems()}
                </div>
                <img src={"/logos/be_fearless_promo.svg"} alt={"logo Be Fearless"}
                     style={{cursor: "pointer", height: "177px"}} className={"web-menu__promo"}/>
            </div>
            <div className={'burger-menu'}>
                <HeaderBurgerMenu/>
            </div>
        </div>
    </div>
}
