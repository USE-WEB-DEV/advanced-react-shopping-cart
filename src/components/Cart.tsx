import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import formatCurrency from "../utilities/currency-formater";

export default function Cart() {
  const { cart, cartDispatch } = useCart();

  const total = cart.items.reduce((sum, item) => {
    if (item.quantity) {
      return sum + item.price * item.quantity;
    } else {
      return 0;
    }
  }, 0);

  return (
    <section
      className="mx-auto max-w-lg space-y-4 px-4 md:px-6"
      id="shopping-cart"
    >
      <h2 className="text-center">Shopping Cart</h2>
      {cart.items.length === 0 ? (
        <p className="animate-pulse text-center">Your Cart is empty</p>
      ) : (
        <div className="grid-wrapper max-w-lg">
          <div className="scrollbar- grid scrollbar-none grid-cols-[repeat(6,auto)] overflow-auto rounded-xl border border-(--border) *:text-neutral-300">
            <div className="contents *:place-self-stretch *:bg-neutral-200/20 *:py-4">
              <span className="flex justify-start pr-2 pl-4 font-bold">
                Product
              </span>
              <span className="flex justify-end pr-2 pl-2 font-bold">
                Price($)
              </span>
              <span className="flex justify-self-center pr-2 pl-2 font-bold">
                Qty
              </span>
              <span></span>
              <span></span>
              <span className="pr-4"></span>
            </div>
            {cart.items.map((item) => (
              <div
                className="contents *:place-self-stretch *:border-b *:border-b-(--border) *:py-4"
                key={item.id}
              >
                {" "}
                <span className="flex items-center justify-start justify-self-start pr-2 pl-4">
                  {item.name}
                </span>
                <span className="flex items-center justify-end justify-self-end pr-2 pl-2">
                  {item.price}
                </span>
                <span className="grid place-items-center justify-self-center pr-2 pl-2">
                  {item.quantity}
                </span>
                <button
                  className="grid place-items-center pr-2 pl-2 disabled:pointer-events-none disabled:invisible"
                  disabled={item.quantity <= 0}
                  onClick={() =>
                    cartDispatch({ type: "decrement", payload: item.id })
                  }
                  type="button"
                >
                  <Minus />
                </button>
                <button
                  className="grid place-items-center pr-2 pl-2"
                  type="button"
                >
                  <Plus
                    onClick={() =>
                      cartDispatch({ type: "increment", payload: item.id })
                    }
                  />
                </button>
                <button
                  className="grid place-items-center pr-4 pl-2"
                  type="button"
                >
                  {" "}
                  <Trash2
                    onClick={() =>
                      cartDispatch({ type: "remove", payload: item.id })
                    }
                    size={18}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <h3 className="text-center">
        <b>Total</b>:{" "}
        <span
          className={`font-mono text-2xl font-bold ${total === 0 ? "text-mauve-500" : "text-emerald-600"}`}
        >
          {formatCurrency(total)}
        </span>
      </h3>

      <div className="cta-section flex flex-row-reverse gap-4">
        <button
          className="shadow-0 focus-visible:ring-ring inline-flex flex-1 items-center justify-center gap-2 rounded-xs bg-emerald-600 px-6 py-3 text-sm font-semibold whitespace-nowrap text-white transition-all hover:bg-emerald-700 focus-visible:ring-1 focus-visible:outline-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0"
          onClick={() => cartDispatch({ type: "clear" })}
          type="button"
        >
          <ShoppingCart />
          <span>Checkout</span>
        </button>
        <button
          className="focus-visible:ring-ring inline-flex scale-90 items-center justify-center gap-2 rounded-sm border border-gray-200/50 px-4 py-3 text-sm font-medium whitespace-nowrap text-gray-600 transition-all hover:border-red-200 hover:bg-red-50 hover:text-red-600 focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none"
          onClick={() => cartDispatch({ type: "clear" })}
          title="Clear all items from cart"
          type="button"
        >
          <Trash2 size={18} />
          <span>Clear</span>
        </button>
      </div>
    </section>
  );
}
