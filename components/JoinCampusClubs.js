import React from "react";
import {handleOffset} from "../src/helpers/handleOffset";
import {List} from "./List";
import {ButtonRedirect} from "./ButtonRedirect";
import {PageCircles} from "./PageCircles";
import styled from "styled-components";
import {joinCampusClubs} from "../constants/club";

const JoinImage = styled.div`
  background-image: url("/clubs/join-campus-club.jpg");
  background-size: cover;
  height: 840px;
  margin-left: 30px;
  @media (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    height: 300px;
    max-height: 300px;
  }
`

export const JoinCampusClubs = () => {
  const offset = handleOffset(1000, 0.2)
  const joinLink = "https://docs.google.com/forms/d/e/1FAIpQLSfqlzz0AfYPLT1dsKT_lV8ctfcpz6viUrv-yjVh7utjFUCpLQ/viewform?usp=sf_link"
  
  return (
    <div className={"container"} style={{ paddingBottom: "100px"}}>
      <div className={"circle"}>
        <PageCircles classes={"circle-base circle-limits"} translateOffset={offset}/>
        <div style={{position: "relative"}}>
          <div className={"relativeContainer"}>
            <div className={"relativeContainer--text"}>Join us</div>
            <JoinImage src={"/clubs/join-campus-club.jpg"} alt={"join campus club"}/>
            <div className={"grassbassadors--description hide-xs show-lg"}>
              <div style={{paddingRight: "50px"}}>
                <div className={"text-block"} style={{paddingTop: "0"}}>As a GrasshoppHer Campus Club member you will:</div>
                <List list={joinCampusClubs}/>
                <div className={"text-block"} style={{display: "inline-block", paddingBottom: "0px"}}>Ready to leap?</div>
                <div style={{display: "inline-block", marginLeft: "30px"}}>
                  <ButtonRedirect text={"Join here"}  href={joinLink} target={true}/>
                </div>
              </div>
            </div>
          </div>
          <div className={"show-xs hide-lg"}>
            <div className={"text-block"}>As a GrasshoppHer Campus Club member you will:</div>
            <List list={joinCampusClubs}/>
            <div className={"text-block"} style={{ display: "inline-block"}}>Ready to leap?</div>
            <div style={{display: "inline-block", marginLeft: "30px"}}>
              <ButtonRedirect text={"Join here"} href={joinLink} target={true}/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
