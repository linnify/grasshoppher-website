import {HeroLayout} from '../HeroLayout/HeroLayout';
import FadeIn from '../FadeIn/FadeIn';
import {PageTitle} from '../PageTitle';
import React from 'react';
import {HighlightedText} from '../HighlightedText/HighlightedText';

export const MembershipHero = () => {
  return (
    <HeroLayout backgroundSrc={'/backgrounds/membership-hero.svg'}>
      <FadeIn>
        <div className={'container'}>
          <PageTitle
            content={"Become\na\nGrasshoppHer"}
            id={"general"}
          />
          <HighlightedText text={'GrassHoppHer is \n' +
            'thrilled to show you how \n' +
            'you have the ability \n' +
            'to leap waaaaay \n' +
            'beyond your \n' +
            'wildest dreams.'} />
        </div>
      </FadeIn>
    </HeroLayout>
  )
}