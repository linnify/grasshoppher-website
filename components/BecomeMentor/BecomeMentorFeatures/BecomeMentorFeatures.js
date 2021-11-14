import React from "react";
import './BecomeMentorFeatures.module.scss';

const cards = [
  {
    icon: '/icons/noun_economy.svg',
    text: 'Enjoy the fruits of your labor through an *all together now* second income.'
  },
  {
    icon: '/icons/noun_high-five.svg',
    text: 'Practice your leadership skills while helping the folks that need them most.'
  },
  {
    icon: '/icons/noun_chart.svg',
    text: 'Disrupt antiquated rules that undervalue female worth.'
  },
  {
    icon: '/icons/noun_hart.svg',
    text: 'Do some good by helping other women, just like you.'
  },
  {
    icon: '/icons/noun_megaphone.svg',
    text: 'Brag to all your friends that you are living your best life and getting paid for it.'
  }
]

export const BecomeMentorFeatures = () => {
  const lastCard = cards.length % 2 === 0 ? null : cards[cards.length - 1]
  const renderCard = (icon, text, index) => {
    return (
      <div className={'become-mentor-features__card'} key={index}>
        <div className={'become-mentor-features__card__icon-container'}>
          <img src={icon}/>
        </div>
        
        <p>{ text }</p>
      </div>
    )
  }
  
  return (
    <div className={'become-mentor-features container padding-vertical-xxl'}>
      <h1 className={'padding-bottom-l'}>
        <span className={'primary-color'}>BY JOINING THE</span> PAID MENTORSHIP <span className={'primary-color'}>HUB</span><br/>
        <span className={'primary-color'}>YOU GET TO:</span>
      </h1>
  
      <div className={'become-mentor-features__cards'}>
        {cards.map((card, index) => index !== cards.length - 1  && renderCard(card.icon, card.text, index))}
      </div>
  
      {lastCard && (
        <div className={'become-mentor-features__cards'} style={{ gridTemplateColumns: 'auto'}}>
          {renderCard(lastCard.icon, lastCard.text, 1)}
        </div>
      )}
    </div>
  )
}
