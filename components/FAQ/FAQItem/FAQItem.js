import React, {useState} from 'react';
import './FAQItem.module.scss';

export const FAQItem = ({ question }) => {
  const [expanded, setExpanded] = useState(false);
  const className = expanded ? 'faq-item__opened' : 'faq-item__closed'
  
  return (
    <div className={`faq-item ${className}`}>
      <div className={'faq-item__title-container'} onClick={() => setExpanded(!expanded)}>
        <div className={'faq-item__title'}>
          { question.title }
        </div>
        <img src={'/icons/arrow-down.svg'} className={'faq-item__arrow'}/>
      </div>
  
      <div className={'faq-item__description'}>
        { question.description }
      </div>
    </div>
  )
}
