import React from "react";
import Link from "next/link";
import {HeaderDropdown} from "./HeaderDropdown";
import {ButtonRedirect} from "./ButtonRedirect";
import {HeaderBurgerMenu} from "./HeaderBurgerMenu";

export const Header = () => {

  return(
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
            <Link href={"https://grasshopphergroup.slack.com/join/shared_invite/zt-p98xthbp-4cJGlt120TqpRCoIIMuVig#/"}>
              <div className={"header__button"}>Join our Slack</div>
            </Link>
          </div>
          <div className={'menu-item'}>
            <Link href={"/partner-with-us"}>
              <ButtonRedirect text={'Find Mentorship'} href={'https://www.grasshoppherapp.com/signup'}/>
            </Link>
          </div>
        </div>
        <div className={'burger-menu'}>
          <HeaderBurgerMenu/>
        </div>
      </div>
    </div>
  );
}