import React from "react";
import Link from "next/link";
import {HeaderDropdown} from "./HeaderDropdown";
import {ButtonRedirect} from "./ButtonRedirect";
import {HeaderBurgerMenu} from "./HeaderBurgerMenu";

export const Header = () => (
  <div className={"container"}>
    <div className={"row middle-xs between-xs header"}>
      <div className={"logo"}>
        <Link href={"/"}>
          <img src={"/logo.svg"} alt={"logo GrasshoppHer"} style={{cursor: "pointer"}} className={"logo"}/>
        </Link>
      </div>
      <div className={"row middle-xs web-menu"}>
        <HeaderDropdown />
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
        <div className={'menu-item'}>
          <Link href={"/her-cloud"}>
            <div className={"header__button"}>HerCloud</div>
          </Link>
        </div>
        <div className={'menu-item'}>
          <ButtonRedirect href={"/disruptors"} text={'Book a Mentor'} target={false} id={'in-header-button'}/>
        </div>
        <div className={'menu-item'}>
          <ButtonRedirect href={"/become-mentor"} text={'Be a Mentor'} target={false} id={'in-header-button'}/>
        </div>
      </div>
      <div className={'burger-menu'}>
        <HeaderBurgerMenu/>
      </div>
    </div>
  </div>
)
