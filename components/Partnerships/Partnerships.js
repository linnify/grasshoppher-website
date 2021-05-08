import React from 'react'
import {ButtonRedirect} from "../ButtonRedirect";
import './Partnerships.module.scss'

export const Partnerships = ({ partners }) => {

  const displayPartners = partners.map((partner, index) => {
    const logo = partner.partner_logo.url
    const pdf = partner?.benefits_document?.url

    return (
      <div className={'partner-card-container'} key={index}>
        <div className={'partner-card'} >
          <div className={'partner-card--logo'}>
            <img src={logo} alt={'logo partner'}/>
          </div>
          <div className={'partner-card--summary'}>{partner.partner_summary}</div>
          {!!pdf && <ButtonRedirect text={'See more'} href={pdf} target={true}/>}
        </div>
      </div>
    )
  })

  return(
    <div className={'padding-top-bottom-100'}>
      <div className={"section-title"}>All Partnerships</div>
      <div className={'partners-list'}>{displayPartners}</div>
    </div>
  )
}