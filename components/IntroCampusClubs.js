import React from "react";
import {handleOffset} from "../src/helpers/handleOffset";
import {List} from "./List";
import {PageCircles} from "./PageCircles";
import {listCampusClubs} from "../constants/club";

export const IntroCampusClubs = () => {
  const offset = handleOffset(0,0.3)
  
  return (
    <div className={"container"}>
      <div className={"padding-top-bottom-100"}>
        <div className={"page-title show-xs hide-lg"}>GrasshoppHer Campus Clubs</div>
        <div className={"row middle-xs middle-lg between-md grassbassadors--row"}>
          <div className={"col-xs-12 col-lg-6 col-xl-5"}>
            <div className={"circle"}>
              <div className={"circle-base circle-one circle-story"} style={{ transform: `translateY(-${offset}px)` }}>
                <span></span>
              </div>
              <div style={{position: "relative"}}>
                <div className={"page-title hide-xs show-lg"}>GrasshoppHer Campus Clubs</div>
                <div className={"text-block"}>Are you a future grad looking to set yourself up for success during the pandemic? Look no further.
                  <b> GrasshoppHer to save the day!</b> Be the best version of yourself with the support of a group of like-minded women on campus. Join a campus club to learn more about:
                </div>
              </div>
            </div>
            <List list={listCampusClubs} itemStyle={{ paddingBottom: 0 }}/>
            <div className={"text-block"} style={{marginTop: "-15px"}}>
              We are launching clubs at UCLA, UC Berkeley, Stanford, Northwestern, University of Michigan, Cornell, Columbia, NYU, Harvard, MIT, Georgetown, Duke, University of Pennsylvania, Georgia Tech, and UT Austin.
              <br/> <br/>Please let us know if you have a passion for building clubs on your campus!
            </div>
          </div>
          <div className={"col-xs-12 col-lg-6 col-xl-6"}>
            <div className={"circle"}>
              <PageCircles classes={"circle-base circle-top-right circle-story-photo"} translateOffset={offset}/>
              <div style={{position: "relative" , textAlign:"center"}}>
                <img src={"/clubs/club.png"} className={"image grassbassadors--image"}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
