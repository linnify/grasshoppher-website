import {Breadcrumbs} from "../../Breadcrumbs/Breadcrumbs";
import React from "react";
import './MentorHeader.module.scss'

export const MentorHeader = ({ title, breadcrumbs }) => {
  
  return (
    <div className={'mentor-header'}>
      <div className={'mentor-header__title'}>
        <h1>{ title }</h1>
        <img src={'/mentor/star.svg'}/>
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      
    </div>
  )
}
