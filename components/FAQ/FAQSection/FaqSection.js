import React from 'react';
import './FaqSection.module.scss';
import {FAQItem} from "../FAQItem/FAQItem";

export const FAQSection = ({ questions }) => {
  
  return (
    <div className={'faq container padding-vertical-xl'}>
      <img className={'faq__image'} src={'faq/faq.jpg'}/>
      
      <div className={'faq__questions'}>
        {questions.map((item, index) => <FAQItem question={item} key={index} />)}
      </div>
    </div>
  )
}
