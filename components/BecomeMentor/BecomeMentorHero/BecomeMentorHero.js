import styles from './BecomeMentorHero.module.scss'
import Typed from 'typed.js';
import React from "react";

export const BecomeMentorHero = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);
  
  React.useEffect(() => {
    const options = {
      strings: [
        'MONEY',
        'MOVES',
        'CHANGE'
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, [])
  
  return (
    <div className={styles['become-mentor']}>
      <video
        playsInline
        loop
        muted
        autoPlay
        preload="auto"
        poster={'/mentor/hero-section.jpg'}
        data-video-element=""
        data-video-mobile-src={'/mentor/hero-section.mp4'}
        data-video-desktop-src={'/mentor/hero-section.mp4'}
        className={styles['become-mentor__video']}
      >
        <source type="video/mp4" src={'/mentor/hero-section.mp4'}/>
      </video>
      
      <div>
        <div className={styles['become-mentor__title']}>
          BECOME A MENTOR.
        </div>
        <div className={`${styles['become-mentor__title']} ${styles['become-mentor__typed']}`}>
          <div className={styles['become-mentor__typed--make']}>MAKE</div>
          <div className={styles['become-mentor__title--pink']}>
            <span style={{ whiteSpace: 'pre' }} ref={el} />
          </div>
        </div>
      </div>
    </div>
  )
}
