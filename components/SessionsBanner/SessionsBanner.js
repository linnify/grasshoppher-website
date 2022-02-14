import React, {useState} from 'react';
import styles from './SessionsBanner.module.scss'
import {IconButton} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import {SessionDiscountDialog} from "../SessionDiscountDialog/SessionDiscountDialog";

export const SessionsBanner = () => {
  const [display, setDisplay] = useState(true)
  const [open, setOpen] = React.useState(false);
  
  if (!display) {
    return null
  }
  
  return (
      <div style={{ height: '48px'}} className={`fade-in visible`}>
        <div className={styles['session-banner']}>
          <span className={'cursor-pointer'} onClick={() => setOpen(true)}>GET 10% OFF YOUR FIRST SESSION</span>
          <IconButton onClick={() => setDisplay(false)} className={'session-banner__close'}>
            <CloseIcon/>
          </IconButton>
        </div>
  
        <SessionDiscountDialog open={open} onClose={() => setOpen(false)}/>
      </div>
  
  )
}
