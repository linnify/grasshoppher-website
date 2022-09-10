import React from "react"
import {slide as Menu} from "react-burger-menu"
import Link from "next/link";
import {header} from "../constants/header";
import {ActiveItem} from "./Header";
import {useRouter} from "next/router";

export const HeaderBurgerMenu = () => {
    const router = useRouter()

    const displayMenuItems = header.map((item, index) => {
        return (
            <div className={'menu-item'} key={index}>
                <Link href={item.path}>
                    <ActiveItem active={item.path === '/'
                        ? router.asPath === item.path
                        : router.asPath.includes(item.path)}
                                style={item.style}>{item.label}</ActiveItem>
                </Link>
            </div>
        )
    })

    return (
        <Menu right={true}>
            <div>
                <Link href={"/"}>
                    <img src={"/logos/logo.svg"} alt={"logo GrasshoppHer"} style={{marginBottom: "40px"}}
                         className={"logo"}/>
                </Link>
            </div>
            {displayMenuItems}
            <img src={"/logos/be_fearless_promo.svg"} alt={"logo Be Fearless"}
                 style={{cursor: "pointer", height: "177px", marginTop: "30px"}} className={"web-menu__promo"}/>
        </Menu>
    )
}
