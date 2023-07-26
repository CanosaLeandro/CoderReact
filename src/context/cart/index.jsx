import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    const existingItem = cart.find((i) => i.title === item.title);

    existingItem
      ? (existingItem.quantity += quantity)
      : setCart([
          ...cart,
          {
            ...item,
            quantity: quantity,
          },
        ]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((i) => i.title !== item.title));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartContextValue = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
