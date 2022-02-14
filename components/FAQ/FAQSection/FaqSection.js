import React from 'react';
import styles from './FaqSection.module.scss';
import {FAQItem} from "../FAQItem/FAQItem";

export const FAQSection = ({ menteeQuestions, mentorQuestions }) => {
  
  return (
    <div className={styles.faq + ' container padding-vertical-xl'}>
      <img className={styles['faq__image']} src={'faq/faq.jpg'}/>
  
      <div className={styles['faq__questions']}>
        <h2>For Mentees</h2>
        {menteeQuestions.map((item, index) => <FAQItem question={item} key={index} />)}
      </div>
      
      <div className={`${styles['faq__questions']} ${styles['faq__questions--border']}`}>
        <h2>For Mentors</h2>
        {mentorQuestions.map((item, index) => <FAQItem question={item} key={index} />)}
      </div>
    </div>
  )
}
