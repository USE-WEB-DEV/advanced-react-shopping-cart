/* This file contains the entire cart state-management layer */

import {
	type ActionDispatch,
	createContext,
	type ReactNode,
	useContext,
	useReducer,
} from "react";

type CartProduct = {
	id: number;
	name: string;
	price: number;
	quantity: number;
};
type Product = Omit<CartProduct, "quantity">;
type CartState = {
	items: CartProduct[];
};

type CartActions =
	| {
			type: "add";
			payload: Product;
	  }
	| { type: "increment"; payload: number }
	| { type: "decrement"; payload: number }
	| { type: "remove"; payload: number }
	| { type: "clear" };

const initialState: CartState = { items: [] };

function cartReducer(state: CartState, action: CartActions) {
	switch (action.type) {
		case "add": {
			const product = action.payload;

			const existingItem = state.items.find((item) => item.id === product.id);

			// if item is already in the cart
			if (existingItem) {
				return {
					// return a new state object, don't mutate the state!
					...state,
					items: state.items.map((item) =>
						item.id === product.id
							? { ...item, quantity: item.quantity++ }
							: item,
					),
				};
			} else {
				// if item is not inside the cart; add it:
				return {
					...state,
					items: [...state.items, { ...product, quantity: 1 }],
				};
			}
		}
		case "increment": {
			return {
				...state,
				items: state.items.map((item) =>
					item.id === action.payload
						? { ...item, quantity: item.quantity++ }
						: item,
				),
			};
		}
		case "decrement": {
			return {
				...state,
				items: state.items.map((item) =>
					item.id === action.payload
						? { ...item, quantity: item.quantity-- }
						: item,
				),
			};
		}
		case "remove": {
			return {
				...state,
				items: state.items.filter((item) => item.id !== action.payload),
			};
		}
		case "clear": {
			return initialState;
		}
		default: {
			const _exhaustiveCheck: never = action;
			throw new Error(`Action_type: "${action.type}" is not yet implemented!`);
		}
	}
}

const CartContext = createContext<{
	state: CartState;
	dispatch: ActionDispatch<[action: CartActions]>;
} | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	return (
		<CartContext.Provider value={{ state, dispatch }}>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	if (context === null) {
		throw new Error("useCart must be used inside CartProvider");
	}

	return context;
}
