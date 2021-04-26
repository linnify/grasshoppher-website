import React from "react"
import { slide as Menu } from "react-burger-menu"
import Link from "next/link";
import {ButtonRedirect} from "./ButtonRedirect";
import {header} from "../constants/header";

export const HeaderBurgerMenu = () => {

  const displayMenuItems = header.map((item, index) => {
    return (
      <div className={'menu-item'} key={index}>
        <Link href={item.link}>
          <div className={'header__button'}>{item.menu}</div>
        </Link>
      </div>
    )
  })

  return(
    <Menu right={true}>
      <div>
        <Link href={"/"}>
          <img src={"/logo.svg"} alt={"logo GrasshoppHer"} style={{marginBottom: "40px"}} className={"logo"}/>
        </Link>
      </div>
      {displayMenuItems}
      <div className={'menu-item'}>
        <Link href={"/partner-with-us"}>
          <div className={"header__button"}>Partner with Us</div>
        </Link>
      </div>
      <div className={'menu-item'}>
        <Link href={"https://grasshopphergroup.slack.com/join/shared_invite/zt-p98xthbp-4cJGlt120TqpRCoIIMuVig#/"}>
          <div className={"header__button"}>Join our Slack</div>
        </Link>
      </div>
      <div style={{marginTop: '20px'}}>
        <Link href={"/partner-with-us"}>
          <ButtonRedirect text={'Find Mentorship'} href={'https://www.grasshoppherapp.com/signup'}/>
        </Link>
      </div>
    </Menu>
  )
}