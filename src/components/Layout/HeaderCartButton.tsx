import { MouseEventHandler } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

interface HeaderCartButton {
  onClick: MouseEventHandler;
}

const HeaderCartButton = ({ onClick }: HeaderCartButton) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
      <span></span>
    </button>
  );
};

export default HeaderCartButton;
