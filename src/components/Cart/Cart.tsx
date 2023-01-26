import Modal from '../UI/Modal';
import classes from './Cart.module.css';

interface CartProps {
  onCloseCart: () => void;
}

const Cart = ({ onCloseCart }: CartProps) => {
  const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(
    item => <li className={classes['cart-items']}>{item.name}</li>,
  );

  return (
    <Modal onClose={onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
