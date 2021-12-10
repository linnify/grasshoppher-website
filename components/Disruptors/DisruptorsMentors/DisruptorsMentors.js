import React from 'react';
import './DisruptorsMentors.module.scss'
import Marquee from "react-marquee-master";
import Link from 'next/link'

export const DisruptorsMentors = ({mentors}) => {
  const renderMentor = (mentor, index) => {
    const image = mentor.professional_profile_image?.url;
    const name = `${mentor.first_name} ${mentor.last_name}`
    const title = `${mentor.title}`
    const tags = (mentor.keywords || [])
    
    return (
      <div className={'disruptors-mentor-card'} key={index}>
        <div className={'disruptors-mentor-card__bar'}>
          <div className={'disruptors-mentor-card__bar--dot'}/>
          <div className={'disruptors-mentor-card__bar--dot'}/>
          <div className={'disruptors-mentor-card__bar--dot'}/>
        </div>
        <div style={{ backgroundImage: `url(${image})`}} className={'disruptors-mentor-card__image'}/>
        <div className={'disruptors-mentor-card__bar'}/>
        
        <Link href={`/mentors/${mentor.slug}`}>
          <div className={'disruptors-mentor-card__nickname'}>{ mentor.nickname }</div>
        </Link>
        <div className={'disruptors-mentor-card__name'}>{ name }</div>
        <div className={'disruptors-mentor-card__occupations'}>{ title }</div>
        
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          <div className={'disruptors-mentor-card__price'}>
            <div>Starting from: ${mentor.starting_price}</div>
          </div>
        </div>
        
        <div className={'disruptors-mentor-card__tags'}>
          {tags.map((tag, index) => <div className={'disruptors-mentor-card__tags--item'} key={index}>#{tag}</div>)}
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
        <div className={'container padding-top-xl disruptors-mentors__mentors'}>
          
          <Marquee
            marqueeItems={displayMentors}
            minHeight={700}
            direction={"left"}
            marqueeItemClassName={'mentor-item'}
            marqueeClassName={'disruptors-mentors__mentors'}
            delay={"10"}
          />
        </div>
      </div>
    
    </div>
  )
  
}
