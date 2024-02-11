// cartContext.jsx

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemsLength, setItemsLength] = useState(0);

  const updateTotalPrice = (price) => {
    setTotalPrice(price);
  };

  const updateItemsLength = (length) => {
    setItemsLength(length);
  };

  return (
    <CartContext.Provider
      value={{
        totalPrice,
        itemsLength,
        updateTotalPrice,
        updateItemsLength,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
