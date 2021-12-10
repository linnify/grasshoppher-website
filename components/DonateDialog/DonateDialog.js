import Dialog from '@material-ui/core/Dialog';
import './DonateDialog.module.scss';
import { IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

export const DonateDialog = ({ open, onClose}) => {
  
  const handleClose = () => {
    onClose();
  };
  
  const prices = [
    {
      name: 'Good Karma',
      price: '$2.00',
      link: 'https://buy.stripe.com/dR65nlex75zxe0o6oo'
    },
    {
      name: 'The Egg',
      price: '$10.00',
      link: 'https://buy.stripe.com/cN2175dt3e632hGdQR'
    },
    {
      name: 'The Muse',
      price: '$20.00',
      link: 'https://buy.stripe.com/fZe8zxcoZ1jh4pO7sv'
    },
    {
      name: 'Metamorphosis',
      price: '$50.00',
      link: 'https://buy.stripe.com/bIY4jhex75zxcWkaEI'
    },
    {
      name: 'The Kahuna',
      price: '$100.00',
      link: 'https://buy.stripe.com/bIY4jhdt3geb2hG9AF'
    },
  ]
  
  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <div className={'donate-dialog'}>
        
        
        <h1 className={'donate-dialog__title'}>
          <div>GH SCHOLARSHIP</div>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </h1>
        <div className={'donate-dialog__description'}>
          How much would you like to donate?
        </div>
        
        <div className={'donate-dialog__buttons'}>
          {prices.map((value, index) => (
            <div key={index} className={'donate-dialog__buttons--container'}>
              <div>{value.name}</div>
              <a className={'donate-dialog__button'} href={value.link}>
                {value.price}
              </a>
            </div>
          ))}
        </div>
      
      
      </div>
    </Dialog>
  );
  
}
