import { createContext, useState, useContext } from "react";

const cartContext = createContext();

const CartProvider = ({ children }) => {
  const [food, setFood] = useState(null);
  const [cartItem, setCartItem] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    const exist = cartItem.find((item) => item._id === food._id);

    if (exist) {
      setCartItem(
        cartItem.map((item) =>
          item._id === food._id ? { ...exist, qty: exist.qty + 1 } : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...food, qty: 1 }]);
    }
  };

  const removeFromCart = (food) => {
    const exist = cartItem.find((item) => item._id === food._id);

    if (exist.qty === 1) {
      setCartItem(cartItem.filter((item) => item._id !== food._id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item._id === food._id ? { ...exist, qty: exist.qty - 1 } : item
        )
      );
    }
  };

  return (
    <cartContext.Provider value={{ addToCart, removeFromCart, cartItem }}>
      {children}
    </cartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(cartContext);
};

export { CartProvider, useCartContext };
