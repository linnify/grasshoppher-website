import Link from 'next/link'
import styles from './MentorSummary.module.scss'

export const MentorSummary = ({ mentor }) => {
  
  return (
    <div className={'container ' + styles['mentor-summary']}>
      <div className={styles['mentor-summary__support-container']}>
        <div className={styles['mentor-summary__support']}>
          <h2>HOW CAN I SUPPORT YOU?</h2>
          <p>{ mentor.support_summary}</p>
        </div>
        
        <div className={styles['mentor-summary__support-container__image']}>
          <img src={'/mentor/star.svg'} />
        </div>
      </div>
      
      <div className={styles['mentor-summary__experience-container']}>
        
        <div className={styles['mentor-summary__experience']}>
          <h2>EXPERIENCE</h2>
          <div>{mentor.experience} YEARS</div>
          <p>{ mentor.experience_summary}</p>
        </div>
      
      </div>
      
      <div className={styles['mentor-summary__book-section']}>
        <Link href={`/mentors/${mentor.slug}/schedule`}>
          <div className={styles['mentor-summary__book-section__button']}>
            Book now
          </div>
        </Link>
      </div>
    
    </div>
  
  )
}
