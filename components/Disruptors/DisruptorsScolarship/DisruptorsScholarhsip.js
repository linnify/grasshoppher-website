import React from 'react';
import './DisruptorsScholarship.module.scss'
import {DonateDialog} from "../../DonateDialog/DonateDialog";

export const DisruptorsScholarhsip = ({ donate }) => {
  const [open, setOpen] = React.useState(false);
  
  const onDonate = () => {
    setOpen(true)
  }
  
  return (
    <div>
      <div className={'scholarship'}>
        <video
          playsInline
          loop
          muted
          autoPlay
          preload="auto"
          poster={'/disruptors/scholarship.jpg'}
          data-video-element=""
          data-video-mobile-src={'/disruptors/scholarship.mp4'}
          data-video-desktop-src={'/disruptors/scholarship.mp4'}
          className={'scholarship__video'}
        >
          
          <source type="video/mp4" src={'/disruptors/scholarship.mp4'}/>
        </video>
        
        <div className={'container scholarship__container'}>
          <h1 className={'scholarship__title'}>GH SCHOLARSHIP</h1>
          <div className={'scholarship__heading'}>
            Believe in karma and doing good? <br/> Same. Donate here to give someone else a leg up.
          </div>
  
          <div className={'scholarship__donate'} onClick={onDonate}>
            Donate
          </div>
        </div>
      
      </div>
      <div className={'container scholarship__description'}>
        Whether your career is just getting started or you’re looking to leap, every woman deserves access to mentorship. If you are in need of access, we’ve created the GH Scholarship. Because part of being by women for women, means we believe in giving each other a leg up – especially when it’s needed most. And by paying for mentorship, you are playing an important role in fostering an economy of women who don’t usually get paid for their worth. Take the first step in unlocking potential by applying or donating.
      </div>
      
      <DonateDialog open={open} onClose={() => setOpen(false)}/>
    </div>
  
  )
  
}
