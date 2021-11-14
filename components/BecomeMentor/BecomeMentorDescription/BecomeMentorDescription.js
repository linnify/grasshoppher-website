import React from "react";
import './BecomeMentorDescription.module.scss';

export const BecomeMentorDescription = () => {
  
  return (
    <div className={'become-mentor-description padding-vertical-xl'}>
      
      <div className={'become-mentor-description__image hide-sm show-md'}/>
      
      <div className={'become-mentor-description__text'}>
        GrasshoppHer is a <b className={'word'}>movement</b>, community and platform designed to connect and empower women – whether you’re looking to grow your skills or share them with others.
        Now, it’s a place where you can <b className={'word'}>get paid</b> for doing that second part.
        That’s right. Our new mentorship paid hub means you get to paid for being, well, you.
        Have an interview secret weapon that could make Miranda Priestly shake in her Pradas?
        Know a thing or two about a two-page resume?
        Generally just a B.O.S.S? Welcome home. <b className={'word'}>You’re one of us.</b>
      
      </div>
    </div>
  )
}
