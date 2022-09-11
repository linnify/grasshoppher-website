import {HeroLayout} from '../../HeroLayout/HeroLayout';
import {PageTitle} from '../../PageTitle';
import React from 'react';
import styles from "./HomeHero.module.scss"
import {Button} from '../../Button';

export const HomeHero = () => {
  return (
    <HeroLayout backgroundSrc={'/backgrounds/home-hero.svg'}>
      <div className={styles['home-hero']}>
        <div className={'container'}>
          <PageTitle content={"There’s\na\nnew\nway\nto\ngrow"}/>
          <div className={`inter1 ${styles['home-hero__text']}`}>Connect with industry experts and a network of leaders to
            catapult you into your dreams, GrasshoppHer.
          </div>
          <Button
            label={'Join now'}
            target={false}
            href={'/membership-landing'}
          />
        </div>
        <div className={styles['home-hero__video']}>
          <video autoPlay loop muted poster={'/images/hero-video-frame.png'}>
            <source src={'/videos/hero.mov'}/>
          </video>
        </div>
      </div>
    </HeroLayout>
  )
}