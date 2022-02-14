import Dialog from '@material-ui/core/Dialog';
import { IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import styles from './SessionDiscountDialog.module.scss';
import Link from 'next/link';

export const SessionDiscountDialog = ({ open, onClose }) => {
  
  const handleClose = () => {
    onClose();
  };
  
  
  return (
    <Dialog onClose={handleClose} open={open}>
      <div className={styles['session-discount-dialog']}>
        
        <IconButton onClick={handleClose} className={styles['session-discount-dialog__close']}>
          <CloseIcon />
        </IconButton>
        
        <div className={styles['session-discount-dialog__discount']}>10% OFF</div>
        <div className={styles['session-discount-dialog__title']}>YOUR FIRST SESSION</div>
        <div className={styles['session-discount-dialog__description']}>
          Use the code <b>GH10</b> and get <b>10%</b> off your first mentorship session on us. Because everyone needs a leg up
        </div>
        
        <Link href={'mentors'}>
          <div className={styles['session-discount-dialog__button']} onClick={handleClose}>
            Find a mentor
          </div>
        </Link>
      </div>
    </Dialog>
    )
}
