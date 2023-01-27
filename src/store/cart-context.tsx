import { createContext } from 'react';
import type { ReactNode } from 'react';

export type ItemType = { id: string; name: string; price: number; amount: number };

interface CartContextType {
  items: ItemType[];
  totalAmount: number;
  addItem: (item: ItemType) => void;
  removeItem: (id: string) => void;
  children?: ReactNode;
}

const CartContext = createContext<CartContextType>({
  items: [],
  totalAmount: 0,
  addItem: item => {},
  removeItem: id => {},
});

export default CartContext;
