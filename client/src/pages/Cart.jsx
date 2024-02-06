import React from "react";
import { useCartContext } from "../context/cartContext";

const Cart = () => {
  const { cartItem, addToCart, removeFromCart } = useCartContext();
  return (
    <div className="pt-14">
      <div className={cartItem?.length === 0 ? "bg-orange h-96" : "bg-orange"}>
        <div className="container mx-auto px-5 py-6">
          <div className="w-full bg-white px-10 py-5  text-black rounded-md">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl">My Food Cart</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
