import React from 'react';
import './DisruptorsMentors.module.scss'
import Marquee from "react-marquee-master";

export const DisruptorsMentors = ({mentors}) => {
  const renderMentor = (mentor, index) => {
    const image = mentor.professional_profile_image?.url;
    const name = `${mentor.first_name} ${mentor.last_name}`
    const role = mentor.role
    const tags = (mentor.keywords || [])
    
    return (
      <div className={'mentor-card'} key={index}>
        <div className={'mentor-card__bar'}>
          <div className={'mentor-card__bar--dot'}/>
          <div className={'mentor-card__bar--dot'}/>
          <div className={'mentor-card__bar--dot'}/>
        </div>
        <div style={{ backgroundImage: `url(${image})`}} className={'mentor-card__image'}/>
        {/*<img src={image} className={'mentor-card__image'} />*/}
        <div className={'mentor-card__bar'}/>
        
        <div className={'mentor-card__title'}>{ mentor.nickname }</div>
        <div className={'mentor-card__name'}>{ name }</div>
        <div className={'mentor-card__occupations'}>{ role }</div>
        
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          <div className={'mentor-card__price'}>
            <div>Starting from: ${mentor.starting_price}</div>
          </div>
        </div>
        
        <div className={'mentor-card__tags'}>
          {tags.map((tag, index) => <div className={'mentor-card__tags--item'} key={index}>#{tag}</div>)}
        </div>
      </div>
    )
  }
  
  const displayMentors = mentors.map((mentor, index) => renderMentor(mentor, index))
  
  return (
    <div className={'relative disruptors-mentors'}>
      
      <div className={'container'} >
        <h1 className={'disruptors-mentors--featured'}>Featured <span className={'disruptors-mentors--mentors'}>Mentors</span></h1>
      </div>
      
      <div className={'disruptors-mentors__waves margin-top-l'}>
        <div className={'container padding-l disruptors-mentors__mentors'}>
          
          <Marquee
            marqueeItems={displayMentors}
            minHeight={600}
            direction={"left"}
            marqueeItemClassName={'mentor-item'}
            marqueeClassName={'disruptors-mentors__mentors'}
            delay={"40"}
          />
        </div>
      </div>
    
    </div>
  )
  
}
