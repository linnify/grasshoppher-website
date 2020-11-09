import React from "react";
import Link from "next/link";

export const Header = () => {
  return(
    <div className={"container"}>
      <div className={"row middle-xs between-xs header"}>
        <div>
          <Link href={"#"}>
            <div className={"header__button"}>Partner with Us</div>
          </Link>
        </div>
        <div className={"hide-xs show-md"}>
          <Link href={"/"}>
            <img src={"/logo.svg"} alt={"logo GrasshoppHer"} style={{cursor: "pointer"}}/>
          </Link>
        </div>
        <div className={"header__button"}>About</div>
      </div>
      <div className={"hide-md center-xs"}>
        <img src={"/logo.svg"} alt={"logo GrasshoppHer"} style={{cursor: "pointer"}}/>
      </div>
    </div>
  );
}