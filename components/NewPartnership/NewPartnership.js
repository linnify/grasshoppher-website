import React from "react";
import {PostContent} from "../PostContent";
import './NewPartnership.module.scss'
import {PageCircles} from "../PageCircles";
import {handleOffset} from "../../src/helpers/handleOffset";

export const NewPartnership = ({ partnership }) => {
  const image = partnership[0].partner_image.url
  const logo = partnership[0].partner_logo.url
  const description = partnership[0].new_partner_description

  const offsetHost = handleOffset(5950,0.3);
  const offsetPartner = handleOffset(4230,0.3);

  return (
    <div>
      <div className={"partners-container"}>
        <div className={"partners-container__vertical-text"}>NEW</div>
        <div className={'partners'}>
          <div className={'partner'}>
            <div className={'partner__items'}>
              <div className={"circle"}>
                <div style={{position: "relative"}}>
                  <PageCircles classes={"circle-base circle-top-left circle-story-photo"} translateOffset={offsetHost}/>
                  <div className={'partner__item'}>
                    <img src={"/partner/intro.png"} className={"image partner--image"}/>
                    <img src={"/logo.svg"} alt={"logo GrasshoppHer"} className={"partner__logo--mobile"} style={{paddingTop: '20px'}}/>
                  </div>
                </div>
              </div>
              <div className={"circle"}>
                <div style={{position: "relative"}}>
                  <div className={'partner__item'}>
                    <img src={logo} alt={"logo partner"} className={"partner__logo--mobile"} style={{paddingBottom: '20px'}}/>
                    <img src={image} className={"image partner--image"}/>
                  </div>
                  <PageCircles classes={"circle-base circle-top-right circle-story-photo"} translateOffset={offsetPartner}/>
                </div>
              </div>
            </div>
          </div>
          <div className={'partner--and-symbol'}>&</div>
        </div>
        <div className={'partner'}>
          <div className={'partner__logos'}>
            <div className={'partner__logo'}>
              <img src={"/logo.svg"} alt={"logo GrasshoppHer"} className={"logo"}/>
            </div>
            <div className={'partner__logo'}>
              <img src={logo} alt={"logo partner"} className={"logo"}/>
            </div>
          </div>
        </div>
        <div className={'text-block'} style={{ marginTop: '50px'}}>
          <PostContent content={description}/>
        </div>
      </div>
    </div>
  )
}