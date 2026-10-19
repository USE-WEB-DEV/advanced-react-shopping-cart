import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { ProductList } from "./components/ProductList";
import { CartProvider } from "./contexts/CartContext";

export default function App() {
  return (
    <>
      <CartProvider>
        <main className="space-y-8">
          <h1 className="my-6 text-center tracking-widest uppercase">
            SH<span className="inline-block animate-bounce">O</span>PRITE
            <span className="animate-pulse text-neutral-500">&trade;</span>
          </h1>
          <ProductList />
          <Cart />
        </main>
      </CartProvider>
      <Footer />
    </>
  );
}
