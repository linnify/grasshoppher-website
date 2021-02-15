import {handleOffset} from "../src/helpers/handleOffset";
import {ButtonRedirect} from "./ButtonRedirect";
import React from "react";
import {PageCircles} from "./PageCircles";

export const CampusClubs = () => {
  
  const offset = handleOffset(1000, 0.2)
  
  return (
    <div className={"container"} >
      <div className={"row middle-xs between-md mentorship--row padding-top-bottom-200"} style={{ paddingBottom: '100px'}}>
        <div className={"col-xs-12 col-md-6 col-xl-5 organization--col"}>
          <div className={`section-title`}>GrasshoppHer Campus Clubs</div>
          <div className={"text-block"} style={{}}>
            Do you want to develop your leadership and job searching skills during the pandemic?
          </div>
          <div style={{paddingTop: "15px"}}>
            <ButtonRedirect text={'Read More'} href={'/clubs'}/>
          </div>
        </div>
        <div className={"col-xs-12 col-md-5 col-xl-6"}>
          <div className={"circle"}>
            <PageCircles classes={"circle-base circle-top-right"} translateOffset={offset}/>
            <div style={{position: "relative", textAlign: "center"}}>
              <img src={"/clubs/club.png"} className={"image"}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
