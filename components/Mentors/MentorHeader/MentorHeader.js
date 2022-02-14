import {Breadcrumbs} from "../../Breadcrumbs/Breadcrumbs";
import React from "react";
import styles from './MentorHeader.module.scss'

export const MentorHeader = ({ title, breadcrumbs }) => {
  
  return (
    <div className={styles['mentor-header']}>
      <div className={styles['mentor-header__title']}>
        <h1>{ title }</h1>
        <img src={'/mentor/star.svg'}/>
      </div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      
    </div>
  )
}
