import React from 'react';
import styles from './DisruptorsMentors.module.scss'
import Marquee from "react-marquee-master";
import Link from 'next/link'

export const DisruptorsMentors = ({mentors}) => {
  const renderMentor = (mentor, index) => {
    const image = mentor.professional_profile_image?.url;
    const name = `${mentor.first_name} ${mentor.last_name}`
    const title = `${mentor.title}`
    const tags = (mentor.keywords || [])
    
    return (
      <div className={styles['disruptors-mentor-card']} key={index}>
        <div className={styles['disruptors-mentor-card__bar']}>
          <div className={styles['disruptors-mentor-card__bar--dot']}/>
          <div className={styles['disruptors-mentor-card__bar--dot']}/>
          <div className={styles['disruptors-mentor-card__bar--dot']}/>
        </div>
        <div style={{ backgroundImage: `url(${image})`}} className={styles['disruptors-mentor-card__image']}/>
        <div className={styles['disruptors-mentor-card__bar']}/>
        
        <Link href={`/mentors/${mentor.slug}`}>
          <div className={styles['disruptors-mentor-card__nickname']}>{ mentor.nickname }</div>
        </Link>
        <div className={styles['disruptors-mentor-card__name']}>{ name }</div>
        <div className={styles['disruptors-mentor-card__occupations']}>{ title }</div>
        
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          <div className={styles['disruptors-mentor-card__price']}>
            <div>Starting from: ${mentor.starting_price}</div>
          </div>
        </div>
        
        <div className={styles['disruptors-mentor-card__tags']}>
          {tags.map((tag, index) => <div className={styles['disruptors-mentor-card__tags--item']} key={index}>#{tag}</div>)}
        </div>
      </div>
    )
  }
  
  const displayMentors = mentors.map((mentor, index) => renderMentor(mentor, index))
  
  return (
    <div className={`relative ${styles['disruptors-mentors']}`}>
      
      <div className={'container'} >
        <h1 className={styles['disruptors-mentors--featured']}>Featured <span className={styles['disruptors-mentors--mentors']}>Mentors</span></h1>
      </div>
      
      <div className={`${styles['disruptors-mentors__waves']} margin-top-l`}>
        <div className={`container padding-top-m ${styles['disruptors-mentors__mentors']}`}>
          
          <Marquee
            marqueeItems={displayMentors}
            minHeight={650}
            direction={"left"}
            marqueeItemClassName={styles['mentor-item']}
            marqueeClassName={styles['disruptors-mentors__mentors']}
            delay={"10"}
          />
        </div>
      </div>
    
    </div>
  )
  
}
