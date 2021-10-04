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
          <a target="_blank" href={"https://grasshopphergroup.slack.com/join/shared_invite/zt-p98xthbp-4cJGlt120TqpRCoIIMuVig#/"} style={{ textDecoration: 'none', color: 'black'}}>
            <div className={"header__button"}>Join our Slack</div>
          </a>
        </div>
        <div className={'menu-item'}>
          <ButtonRedirect text={'Find Mentorship'} href={'https://www.grasshoppherapp.com/signup'} target={true} id={'in-header-button'}/>
        </div>
        <div className={'menu-item'}>
          <ButtonRedirect text={'Be a Mentor'} href={'https://forms.gle/YxesDx7X1UXsV4HA9'} target={true} id={'in-header-button'}/>
        </div>
      </div>
      <div className={'burger-menu'}>
        <HeaderBurgerMenu/>
      </div>
    </div>
  </div>
)