import {HeroLayout} from '../../HeroLayout/HeroLayout';
import {PageTitle} from '../../PageTitle';
import React from 'react';
import {HighlightedText} from '../../HighlightedText/HighlightedText';
import styles from "./MembershipHero.module.scss"

export const MembershipHero = () => {
  return (
    <HeroLayout backgroundSrc={'/backgrounds/membership-hero.svg'}>
      <div className={`container ${styles['membership-hero']}`}>
        <PageTitle content={"Become\na\nGrasshoppHer"}/>
        <HighlightedText text={'GrassHoppHer is \n' +
          'thrilled to show you how \n' +
          'you have the ability \n' +
          'to leap waaaaay \n' +
          'beyond your \n' +
          'wildest dreams.'} />
      </div>
    </HeroLayout>
  )
}