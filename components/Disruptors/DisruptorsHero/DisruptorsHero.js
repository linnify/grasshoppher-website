import React from 'react';
import './DisruptorsHero.module.scss'
import Typed from 'typed.js';

export const DisruptorsHero = () => {
  
  const el = React.useRef(null);
  const typed = React.useRef(null);
  
  React.useEffect(() => {
    const options = {
      strings: [
        'THE DISRUPTORS',
      ],
      typeSpeed: 50,
      backSpeed: 50,
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
    <div className={'hero-section'}>
      <video
        playsInline
        loop
        muted
        autoPlay
        preload="auto"
        poster={'/disruptors/hero.jpg'}
        data-video-element=""
        data-video-mobile-src={'/disruptors/hero-section.mp4'}
        data-video-desktop-src={'/disruptors/hero-section.mp4'}
        className={'hero-section__video'}
      >
        
        <source type="video/mp4" src={'/disruptors/hero-section.mp4'}/>
      </video>
      
      <div className={'hero-section__grid'}/>
      
      <div className={'hero-box'}>
        <div className={'hero-box__header'}>
          <div className={'hero-box__header__dot'}/>
          <div className={'hero-box__header__dot'}/>
          <div className={'hero-box__header__dot'}/>
        </div>
        
        <div className={'hero-box__container'}>
          <div className="hero-box__type-wrap">
            <span style={{ whiteSpace: 'pre' }} ref={el} />
          </div>
          
          <div className={'hero-box__discover'}>
            discover your
          </div>
          
          <div className={'hero-box__mentor'}/>
        </div>
      </div>
    </div>
  )
}
