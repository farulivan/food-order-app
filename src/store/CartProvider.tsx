import { ReactNode, useReducer } from 'react';
import CartContext, { ItemType } from './cart-context';

interface CartProviderProps {
  children: ReactNode;
}

type ACTION_TYPE =
  | { type: 'ADD'; item: ItemType }
  | { type: 'REMOVE'; id: string };

const defaultCartState = {
  items: [] as ItemType[],
  totalAmount: 0,
};

const cartReducer = (state: typeof defaultCartState, action: ACTION_TYPE) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState,
  );

  const addItemToCartHandler = (item: ItemType) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemToCartHandler = (id: string) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
};

export default CartProvider;
