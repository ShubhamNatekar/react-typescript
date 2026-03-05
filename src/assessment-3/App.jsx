import { useState } from "react";
import { productsData } from "./data/products";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [products, setProducts] = useState(productsData);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (product.quantity === 0) return;

    setProducts((prev) =>
      prev.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
      )
    );

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );

    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (!existing) return prev;

      if (existing.qty === 1) {
        return prev.filter((item) => item.id !== product.id);
      }

      return prev.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty - 1 } : item
      );
    });
  };

  return (
    <div className="container">
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
}

export default App;