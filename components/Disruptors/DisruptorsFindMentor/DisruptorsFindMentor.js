import React from 'react';
import './DisruptorsFindMentor.module.scss'

export const DisruptorsFindMentors = () => {
  
  return (
    <div className={'container'}>
      <div className={'title-container'}>
        <h1 className={'title-container__title'}>
          Booking a mentor is easy as <span className={'hide-md title-container__count'}> 1,2,3 </span> <br/>
          No, <span className={'title-container__title--pink'}>like literally.</span>
        </h1>
        <div className={'title-container__count show-md'}>
          1,2,3
        </div>
      </div>
      
      <div className={'steps'}>
        
        <div className={'steps__step'}>
          <img src={'/disruptors/search.svg'} className={'steps__step__image'}/>
          <div className={'steps__step__title'}>
            Find a mentor that serves your needs.
          </div>
          <div className={'steps__step__description'}>
            Exploring tech? Prepping a pitch? Just window shopping for a guru? <br/>
            Explore a robust community of mentors, based on your unique needs.
          </div>
        </div>
        
        <div className={'steps__step'}>
          <img src={'/disruptors/calendar.svg'} className={'steps__step__image'}/>
          <div className={'steps__step__title'}>
            Book a session
          </div>
          <div className={'steps__step__description'}>
            Your time, your terms. Whether it’s a monthly 1-on-1 or a daily 30, mentors make it work when it works for you.
          </div>
        </div>
        
        <div className={'steps__step'}>
          <img src={'/disruptors/hart.svg'} className={'steps__step__image'}/>
          <div className={'steps__step__title'}>
            Begin your journey
          </div>
          <div className={'steps__step__description'}>
            Once your matched, the journey begins. Consider this your professional path to enlightenment. Namaste, GrasshoppHers.
          </div>
        </div>
      </div>
      
      <div className={'ready-section'}>
        <div className={'ready-container'}>
          <div className={'ready-container__title-container'}>
            <h1 className={'ready-container__title'}>Ready for your mentor?</h1>
            
            <div className={'ready-container__gotchu'}>
              <div>
                <span className={'pink'}>We </span>
                <span className={'yellow'}>g</span>
                <span className={'red'}>o</span>
                <span className={'pink'}>t</span>
                <span className={'white'}>c</span>
                <span className={'light-yellow'}>h</span>
                <span className={'red'}>u</span>
                <span className={'pink'}>.</span>
              </div>
            </div>
          </div>
          <div className={'ready-container__image show-md'}/>
        </div>
        <div className={'grid'}/>
      </div>
    </div>
  )
  
}
