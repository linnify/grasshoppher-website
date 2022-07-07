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
        <Link href={"/membership"}>
          <div className={"header__button"}>Presale Membership</div>
        </Link>
      </div>
      <div className={'menu-item'}>
        <Link href={"/partner-with-us"}>
          <div className={"header__button"}>Partner with Us</div>
        </Link>
      </div>
      <div style={{marginTop: '20px', marginBottom: '20px'}}>
        <ButtonRedirect href={"/disruptors"} text={'Book a Mentor'} target={false} id={'in-header-button'}/>
      </div>
      <div style={{marginTop: '20px'}}>
        <ButtonRedirect href={"/become-mentor"} text={'Be a Mentor'} target={false} id={'in-header-button'}/>
      </div>
    </Menu>
  )
}
