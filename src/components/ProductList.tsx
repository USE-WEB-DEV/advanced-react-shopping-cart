import { ShoppingCartPlusIcon } from "lucide-react";
import { memo } from "react";
import { useCart } from "../contexts/CartContext";
import formatCurrency from "../utilities/currency-formater";

const products = [
  { id: 1, name: "Keyboard", price: 25000 },
  { id: 2, name: "Mouse", price: 1200 },
  { id: 3, name: "Monitor", price: 18000 },
];

const primaryCTA =
  "inline-flex items-center justify-center gap-1 whitespace-nowrap rounded-sm text-sm font-bold font-[poppins] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-emerald-600 text-emerald-50 shadow hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700 h-9 px-2 py-2";

export const ProductList = memo(function ProductList() {
  const { cartDispatch } = useCart();
  const spanStyle = "place-items-center grid grid-col-1 ";
  return (
    <section
      className="mx-auto grid max-w-lg gap-4 px-4 md:px-6"
      id="product-list"
    >
      <h2 className="text-center font-[poppins] tracking-widest">
        Products in Stock
      </h2>
      <div className="grid-wrapper grid max-w-lg scrollbar-none grid-cols-1 place-content-center-safe overflow-auto rounded-xl border border-(--border)">
        <div className="grid grid-cols-[repeat(3,auto)] gap-y-0">
          <div className="contents *:place-self-stretch *:bg-neutral-200/20 *:py-4 *:text-neutral-300">
            <span className="flex justify-self-start pr-2 pl-4 font-bold capitalize">
              Product
            </span>
            <span className="flex justify-end pr-2 pl-2 font-bold capitalize">
              Price&nbsp;($){" "}
            </span>
            <span className="flex place-content-center pr-4 pl-2 font-semibold tracking-wide capitalize">
              Purchase
            </span>
          </div>
          {products.map((product) => {
            return (
              <div
                className="contents divide-y divide-(--border) *:py-4"
                key={product.id}
              >
                <span className={`${spanStyle} justify-start pr-2 pl-4`}>
                  {product.name}
                </span>
                <span className={`${spanStyle} justify-end pr-2 pl-2`}>
                  {" "}
                  {formatCurrency(product.price, false)}
                </span>

                <div className="grid place-content-center place-self-stretch border-b border-b-(--border) pr-4 pl-2">
                  <button
                    className={`${primaryCTA}`}
                    onClick={() => cartDispatch({ type: "add", payload: product })}
                    type="button"
                  >
                    <ShoppingCartPlusIcon size={18} />
                    <span>Add to cart</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});
