import React from "react";
import './MentorCardBar.module.scss';

export const MentorCardBar = ({ bottom }) => {
  if (bottom) {
    return (
      <div className={'mentor-card-bar mentor-card-bar__bottom'}/>
    )
  }
  
  return (
    <div className={'mentor-card-bar'}>
      <div className={'mentor-card-bar__dot'}/>
      <div className={'mentor-card-bar__dot'}/>
      <div className={'mentor-card-bar__dot'}/>
    </div>
  )
}
