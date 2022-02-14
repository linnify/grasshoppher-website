import React, {useState} from 'react';
import styles from './FAQItem.module.scss';

export const FAQItem = ({ question }) => {
  const [expanded, setExpanded] = useState(false);
  const className = expanded ? styles['faq-item__opened'] : styles['faq-item__closed']
  
  return (
    <div className={`${styles['faq-item']} ${className}`}>
      <div className={styles['faq-item__title-container']} onClick={() => setExpanded(!expanded)}>
        <div className={styles['faq-item__title']}>
          { question.title }
        </div>
        <img src={'/icons/arrow-down.svg'} className={styles['faq-item__arrow']}/>
      </div>
  
      <div className={styles['faq-item__description']}>
        { question.description }
      </div>
    </div>
  )
}
