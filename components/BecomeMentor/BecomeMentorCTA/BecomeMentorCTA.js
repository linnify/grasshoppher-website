import React from "react";
import './BecomeMentorCTA.module.scss';
import Link from "next/link";


export const BecomeMentorCTA = () => {
  return (
    <div className={'become-mentor-cta'}>
      <div className={'become-mentor-cta__container'}>
        <h1>BECOME A MENTOR. GET PAID.</h1>
        <h1 className={'become-mentor-cta__subtitle'}>Because your two cents shouldn’t be free.</h1>
        
        <div className={'become-mentor-cta__apply'}>
          <Link href={"https://forms.gle/YxesDx7X1UXsV4HA9"}>
            <a target="_blank">Apply</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
