import React from "react";
import styles from "./MembershipCommunity.module.scss"
import {HighlightedText} from '../../HighlightedText/HighlightedText';
import {Button} from '../../Button';

export const MembershipCommunity = () => {
  return (
    <div className={styles['membership-community']}>
      <div className={`container ${styles['membership-community__content']}`}>
        <HighlightedText text={'Wondering if this\nis the community for you?'}/>
        <div className={styles['membership-community__questions__wrapper']}>
          <div className={styles['membership-community__text']}>
            If you put a finger down to most of these questions, then yes, it is!
          </div>
          <div className={styles['membership-community__questions']}>
            <div className={styles['membership-community__text']}>
              Feeling stuck? Or lookin' for career love in all the wrong places?
            </div>
            <div className={styles['membership-community__text']}>
              Ready to leap on over to the next phase of your journey?
            </div>
            <div className={styles['membership-community__text']}>
              Eager to connect with thought leaders? (But tired of cold messaging them on LinkedIn?)
            </div>
          </div>
        </div>
        <Button
          label={'Join GrasshoppHer'}
          target={false}
          href={'/membership'}
        />
      </div>
      <div className={styles['membership-community__image']}>
        <img src={'/images/community.png'}/>
      </div>
    </div>
  )
}