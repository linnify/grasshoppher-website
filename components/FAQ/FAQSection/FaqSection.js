import React from 'react';
import './FaqSection.module.scss';
import {FAQItem} from "../FAQItem/FAQItem";

export const FAQSection = ({ menteeQuestions, mentorQuestions }) => {
  
  return (
    <div className={'faq container padding-vertical-xl'}>
      <img className={'faq__image'} src={'faq/faq.jpg'}/>
  
      <div className={'faq__questions'}>
        <h2>For Mentees</h2>
        {menteeQuestions.map((item, index) => <FAQItem question={item} key={index} />)}
      </div>
      
      <div className={'faq__questions faq__questions--border'}>
        <h2>For Mentors</h2>
        {mentorQuestions.map((item, index) => <FAQItem question={item} key={index} />)}
      </div>
    </div>
  )
}
