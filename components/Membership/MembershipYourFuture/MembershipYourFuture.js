import React from 'react';
import styles from "./MembershipYourFuture.module.scss"
import {PageTitle} from '../../PageTitle';
import {RedirectButton} from '../../RedirectButton';
import {HighlightedText} from '../../HighlightedText/HighlightedText';

export const MembershipYourFuture = () => {

  return (
    <div className={styles['membership-your-future']}>
      <div className={styles['membership-your-future__title']}>
        <PageTitle
          content={"Dont't\nleave\nyour\nfuture\non\nread."}
        />
        <RedirectButton
          label={'Join GrasshoppHer'}
          target={false}
          href={'/membership'}
        />
      </div>
      <HighlightedText text={'Go you. \n' +
        'Join Now. \n' +
        'Look at you Thriving.'} />
    </div>
  )
}