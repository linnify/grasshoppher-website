import React from 'react';
import styles from './DisruptorsFindMentor.module.scss'
import Link from 'next/link';

export const DisruptorsFindMentors = () => {
  
  return (
    <div className={'container'}>
      <div className={styles['title-container']}>
        <h1 className={styles['title-container__title']}>
          Booking a mentor is easy as <span className={`hide-md ${styles['title-container__count']}`}> 1,2,3 </span> <br/>
          No, <span className={styles['title-container__title--pink']}>like literally.</span>
        </h1>
        <div className={`${styles['title-container__count']} show-md`}>
          1,2,3
        </div>
      </div>
      
      <div className={styles['steps']}>
        
        <div className={styles['steps__disruptor-step']}>
          <img src={'/disruptors/search.svg'} className={styles['steps__disruptor-step__image']}/>
          <div className={styles['steps__disruptor-step__title']}>
            Find a mentor that serves your needs.
          </div>
          <div className={styles['steps__disruptor-step__description']}>
            Exploring tech? Prepping a pitch? Just window shopping for a guru? <br/>
            Explore a robust community of mentors, based on your unique needs.
          </div>
        </div>
        
        <div className={styles['steps__disruptor-step']}>
          <img src={'/disruptors/calendar.svg'} className={styles['steps__disruptor-step__image']}/>
          <div className={styles['steps__disruptor-step__title']}>
            Book a session
          </div>
          <div className={styles['steps__disruptor-step__description']}>
            Your time, your terms. Whether it’s a monthly 1-on-1 or a daily 30, mentors make it work when it works for you.
          </div>
        </div>
        
        <div className={styles['steps__disruptor-step']}>
          <img src={'/disruptors/hart.svg'} className={styles['steps__disruptor-step__image']}/>
          <div className={styles['steps__disruptor-step__title']}>
            Begin your journey
          </div>
          <div className={styles['steps__disruptor-step__description']}>
            Once you're matched, the journey begins. Consider this your professional path to enlightenment. Namaste, GrasshoppHers.
          </div>
        </div>
      </div>
      
      <div className={styles['ready-section']}>
        <div className={styles['ready-container']}>
          <div className={styles['ready-container__title-container']}>
            <h1 className={styles['ready-container__title']}>Ready for your mentor?</h1>
            
            <div className={styles['ready-container__gotchu']}>
              <div>
                <span className={styles.pink}>We </span>
                <span className={styles.yellow}>g</span>
                <span className={styles.red}>o</span>
                <span className={styles.pink}>t</span>
                <span className={styles.white}>c</span>
                <span className={styles['light-yellow']}>h</span>
                <span className={styles.red}>u</span>
                <span className={styles.pink}>.</span>
              </div>
  
              <Link href={'/mentors'}>
                <div className={styles['ready-container__find-mentor']}>
                  Find a mentor
                </div>
              </Link>
            </div>
            
          </div>
          <div className={styles['ready-container__image show-md']}/>
        </div>
        <div className={styles['grid']}/>
      </div>
    </div>
  )
  
}
