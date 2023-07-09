import { createContext, useState } from "react";
import items from "../../items.json";

const CartContext = createContext({
  cartProducts: {},
});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingItem = cart[item.title];

    if (existingItem) {
      ++existingItem.quantity;
      setCart({
        ...cart,
        [item.title]: existingItem,
      });
    } else {
      setCart({
        ...cart,
        [item.title]: {
          ...item,
          quantity: 1,
        },
      });
    }
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter((i) => i.title !== item.title));
  };

  const clearCart = () => {
    setCart([]);
  };

  const itemsInCart = () => {
    let newItems = items.filter((i) => {
      return (
        i.id &&
        i.title &&
        i.price &&
        i.image &&
        i.description &&
        i.category &&
        i.rating.rate &&
        i.rating.count
      );
    });

    newItems.map((i) => {
      i.stock = i.rating.count;
      i.quantity = i.rating.rate.toFixed(0);
    });

    return newItems;
  };

  return (
    <CartContext.Provider
      value={{
        cart: itemsInCart(),
        setCart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
