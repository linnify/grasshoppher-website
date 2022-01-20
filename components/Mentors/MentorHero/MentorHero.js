import React from 'react'
import Link from 'next/link'
import './MentorHero.module.scss'
import {MentorCardBar} from "../MentorCardBar/MentorCardBar";
import {MentorHeader} from "../MentorHeader/MentorHeader";

export const  MentorHero = ({ mentor }) => {
  const image = mentor.professional_profile_image?.url;
  const funnyImage = mentor.funny_profile_image?.url;
  const name = `${mentor.first_name} ${mentor.last_name}`
  const role = mentor.role
  const tags = (mentor.keywords || [])
  
  const breadcrumbs = [
    {
      label: "The Disruptors",
      href: '/disruptors'
    },
    {
      label: "Meet the Disruptors",
      href: '/mentors',
    },
    {
      label: mentor.nickname,
      href: `/mentors/${mentor.slug}`,
      current: true
    }
  ]
  const [displayImage, setDisplayImage] = React.useState(image)
  
  const renderInfo = () => {
    return (
      <div className={'mentor-info'}>
        <h2 className={'mentor-info__name'}>{ name }</h2>
        <div className={'mentor-info__occupations'}>{ role }</div>
        
        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
          <div className={'mentor-info__price'}>
            <div>Starting from: ${mentor.starting_price}</div>
          </div>
        </div>
        
        <div className={'mentor-info__tags'}>
          {tags.map((tag, index) => <div className={'mentor-info__tags--item'} key={index}>#{tag}</div>)}
        </div>
  
        {mentor.free_call && <div className={'mentor-info__free-call'}>
          Free 10-minute complimentary fit call
        </div>}
      </div>
    )
  }
  
  const renderSocial = () => {
    return (
      <div className={'mentor-hero__social'}>
        {mentor.facebook && <a href={mentor.facebook}  target={'_blank'} className={'margin-right-s'}>
          <img src={'/icons/facebook.svg'} width={30} height={30}/>
        </a>}
        
        {mentor.youtube && <a href={mentor.youtube}  target={'_blank'} className={'margin-right-s'}>
          <img src={'/icons/youtube.svg'} width={30} height={30}/>
        </a>}
        
        {mentor.twitter && <a href={mentor.twitter}  target={'_blank'} className={'margin-right-s'}>
          <img src={'/icons/twitter.svg'} width={30} height={30}/>
        </a>}
        
        {mentor.instagram && <a href={mentor.instagram}  target={'_blank'} className={'margin-right-s'}>
          <img src={'/icons/instagram.svg'} width={30} height={30}/>
        </a>}
  
        {mentor.linkedin && <a href={mentor.linkedin}  target={'_blank'} className={'margin-right-s'}>
          <img src={'/icons/linkedin.svg'} width={30} height={30}/>
        </a>}
  
        {mentor.medium && <a href={mentor.medium}  target={'_blank'} className={'margin-right-s'}>
          <img src={'/icons/medium.svg'} width={30} height={30}/>
        </a>}
  
        {mentor.website && <a href={mentor.website}  target={'_blank'} >
          <img src={'/icons/web.svg'} width={30} height={30}/>
        </a>}
      </div>
    )
  }
  
  return (
    <div className={'mentor-hero'}>
      
      <div className={'mentor-hero__background'}/>
      
      <div className={'mentor-hero__info container'}>
        <div className={'mentor-hero__title-container'}>
   
          <MentorHeader title={'The Disruptor'} breadcrumbs={breadcrumbs}/>
          
          { renderInfo()}
          
          <div className={'show-lg'}>
            <div className={'mentor-hero__why'}>
              <div className={'mentor-hero__why__inner'}>
                <h2>WHY AM I A MENTOR?</h2>
                <p>{ mentor.summary }</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={'mentor-hero__image-container'}
             onMouseOver={() => funnyImage && setDisplayImage(funnyImage)}
             onMouseOut={() => funnyImage && setDisplayImage(image)}
        >
          <MentorCardBar />
          <div style={{backgroundImage: `url(${displayImage})`}} className={'mentor-hero__image-container__img'}>
            <img src={'/icons/blue-rectangle.svg'} className={'mentor-hero__image-container--rectangle'}/>
            <img src={'/icons/yellow-circle.svg'} className={'mentor-hero__image-container--circle'}/>
            <img src={'/icons/red-triangle.svg'} className={'mentor-hero__image-container--triangle'}/>
          </div>
          <MentorCardBar bottom={true}/>
          
          { renderSocial() }
          <Link href={`/mentors/${mentor.slug}/schedule`}>
            <div className={'mentor-hero__book-now'}>
              Book a session
            </div>
          </Link>
        </div>
  
  
        <div className={'hide-lg'}>
          <div className={'mentor-hero__why'}>
            <div className={'mentor-hero__why__inner'}>
              <h2>WHY AM I A MENTOR?</h2>
              <p>{ mentor.summary }</p>
            </div>
          </div>
        </div>
      </div>
    
    
    
    </div>
  )
}
