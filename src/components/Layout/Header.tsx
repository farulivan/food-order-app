import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

interface HeaderProps {
  onShowCart: () => void
}

const Header = ({onShowCart}: HeaderProps) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>OrderMeals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicous food!' />
      </div>
    </Fragment>
  );
};

export default Header;
