import './DisruptorsMentorshipMovement.module.scss'

const cards = [
  {
    icon: '/disruptors/noun_woman-power.svg',
    text: 'Tap into a network of female powerhouses. Nuff ‘said'
  },
  {
    icon: '/disruptors/noun_innovation.svg',
    text: 'Learn the skills you need to level-up, from folks who already have'
  },
  {
    icon: '/icons/noun_high-five.svg',
    text: 'Take a chance – without doing it alone'
  },
  {
    icon: '/icons/noun_economy.svg',
    text: 'Foster an economy of women who don’t usually get paid for their worth'
  },
  {
    icon: '/icons/noun_megaphone.svg',
    text: 'Brag to all your friends that you basically have a personal trainer for your future'
  }
]

export const DisruptorsMentornshipMovement = () => {
  const lastCard = cards.length % 2 === 0 ? null : cards[cards.length - 1]
  const renderCard = (icon, text, index) => {
    return (
      <div className={'card'} key={index}>
        <div className={'card__icon-container'}>
          <img src={icon}/>
        </div>
        
        <p>{ text }</p>
      </div>
    )
  }
  
  return (
    <div className={'container'}>
      <h1 className={'padding-bottom-m'}>
        <span className={'primary-color'}>BY JOINING THE</span> MENTORSHIP MOVEMENT <br/>
        <span className={'primary-color'}>YOU GET TO</span>
      </h1>
      
      <div className={'cards'}>
        {cards.map((card, index) => index !== cards.length - 1  && renderCard(card.icon, card.text, index))}
      </div>
      
      {lastCard && (
        <div className={'cards'} style={{ gridTemplateColumns: 'auto'}}>
          {renderCard(lastCard.icon, lastCard.text, 1)}
        </div>
      )}
    
    </div>
  )
}
