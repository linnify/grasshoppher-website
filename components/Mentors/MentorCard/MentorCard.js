import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import './MentorCard.module.scss';
import {MentorCardBar} from "../MentorCardBar/MentorCardBar";


export const MentorCard = ({ mentor }) => {
  const image = mentor.professional_profile_image?.url;
  const funnyImage = mentor.funny_profile_image?.url;
  const name = `${mentor.first_name} ${mentor.last_name}`
  const role = mentor.role
  const tags = (mentor.keywords || [])
  const [displayImage, setDisplayImage] = useState(image)
  
  useEffect(() => {
    setDisplayImage(image)
  }, [mentor])
  
  
  return (
    <Link href={`/mentors/${mentor.slug}`}>
      <div className={'mentor-card'}
           onMouseOver={() => funnyImage && setDisplayImage(funnyImage)}
           onMouseOut={() => funnyImage && setDisplayImage(image)}
      >
        <MentorCardBar />
        <div style={{ backgroundImage: `url(${displayImage})`}} className={'mentor-card__image'}>
          <div className={'mentor-card__title'}>
            { mentor.nickname }
          </div>
        </div>
        
        
        
        <div className={'mentor-card__details-container'}>
          <div className={'mentor-card__details'}>
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
          <MentorCardBar bottom={true}/>
        </div>
      
      </div>
    </Link>
  )
}
