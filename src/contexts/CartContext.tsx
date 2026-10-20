/* This file contains the entire cart state-management layer */

import {
  type ActionDispatch,
  createContext,
  type ReactNode,
  useContext,
  
} from "react";
import { useImmerReducer } from "use-immer";

export type ShelfProduct = {
  id: number;
  name: string;
  price: number;
  quantity: 0;
};
// type Product = Omit<CartProduct, "quantity">;
type CartProduct = {
  [P in keyof ShelfProduct]: P extends "quantity" ? number : ShelfProduct[P];
};
type CartState = {
  items: CartProduct[];
};

type CartActions =
  | {
      type: "add";
      payload: ShelfProduct;
    }
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number }
  | { type: "remove"; payload: number }
  | { type: "clear" };

const initialCart: CartState = { items: [] };

function cartReducer(draft: CartState, action: CartActions) {
  switch (action.type) {
    case "add": {
      const product = action.payload;

      // check if item is already in the cart
      const foundItem = draft.items.find((item) => item.id === product.id);

      // case: item's kind already in cart
      if (foundItem) {
        foundItem.quantity++;
        break;
      } else {
        // case: item's not in the cart

        draft.items.push({ ...product, quantity: 1 });
        break;
      }
    }
    case "increment": {
      const cartItem = draft.items.find(
        (item) => item.id === action.payload,
      ) as CartProduct;
      cartItem.quantity++;

      break;
    }
    case "decrement": {
      const cartItem = draft.items.find(
        (item) => item.id === action.payload,
      ) as CartProduct;
      cartItem.quantity--;
      break;
    }
    case "remove": {
      draft.items = draft.items.filter((item) => item.id !== action.payload);
      break;
    }
    case "clear": {
      draft.items = [];
      break;
    }
    default: {
      const _exhaustiveCheck:never = action.type;
      throw new Error(`Action_type: "${action.type}" is not yet implemented!`);
    }
  }
}

// create the cart context
const CartContext = createContext<{
  cart: CartState;
 cartDispatch: ActionDispatch<[action: CartActions]>;
} | null>(null);

/* Wraps a child/children components and
provides them with valid cart context */
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, cartDispatch] = useImmerReducer(cartReducer, initialCart);

  return (
    <CartContext.Provider value={{ cart,cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// custom hook to validate cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
