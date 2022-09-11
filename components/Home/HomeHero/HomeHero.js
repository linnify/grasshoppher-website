import {HeroLayout} from '../../HeroLayout/HeroLayout';
import {PageTitle} from '../../PageTitle';
import React from 'react';
import styles from "./HomeHero.module.scss"
import {RedirectButton} from '../../RedirectButton';
import {Parallax} from 'react-scroll-parallax';

export const HomeHero = () => {
  return (
    <HeroLayout backgroundSrc={'/backgrounds/home-hero.svg'}>
      <div className={styles['home-hero']}>
        <div className={'container'}>
          <PageTitle content={"There’s\na\nnew\nway\nto\ngrow"}/>
          <div className={`inter1 ${styles['home-hero__text']}`}>Connect with industry experts and a network of leaders
            to
            catapult you into your dreams, GrasshoppHer.
          </div>
          <RedirectButton
            label={'Join now'}
            target={false}
            href={'/membership-landing'}
          />
        </div>
        <div className={styles['home-hero__video']}>
          <Parallax scale={[1, 1.3]} easing="easeInQuad">
            <video
              playsInline
              loop
              muted
              autoPlay
              preload="auto"
              poster={'/images/hero-video-frame.png'}
            >
              <source src={'/videos/hero.mov'}/>
            </video>
          </Parallax>
        </div>
      </div>
    </HeroLayout>
  )
}