import {HeroLayout} from '../../HeroLayout/HeroLayout';
import {PageTitle} from '../../PageTitle';
import React from 'react';
import {HighlightedText} from '../../HighlightedText/HighlightedText';
import styles from "./StoryHero.module.scss"
import {Parallax} from 'react-scroll-parallax';

export const StoryHero = () => {
  return (
    <HeroLayout backgroundSrc={'/backgrounds/story-hero.svg'}>
      <div className={`container ${styles['story-hero']}`}>
        <div className={styles['story-hero__content']}>
          <PageTitle content={"About\nus"}/>
          <div className={`${styles['story-hero__text']}`}>
            <HighlightedText text={'GrasshoppHer is\na career roadmapping\nservice and community. '}/>
            <h3 className={styles['story-hero__content__subtitle']}>
              We know what it feels like to have taken some seemingly unrelated turns on our chosen paths. Let us be
              your roadmap on the next leg of your journey. We’ll help you fill in the missing pieces to reach
              your full potential.
            </h3>
          </div>
        </div>
        <div className={styles['story-hero__image']}>
          <Parallax speed={8}>
            <img src={'/images/story-hero.png'}/>
          </Parallax>
        </div>
      </div>
    </HeroLayout>
  )
}