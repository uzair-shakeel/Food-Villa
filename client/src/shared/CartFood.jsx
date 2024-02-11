import React, { useState } from "react";
import { FaSquareMinus, FaSquarePlus, FaTrash } from "react-icons/fa6";
import { toast } from "react-toastify";

const CartFood = ({ item }) => {
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const [quantity, setQuantity] = useState(item.quantity);

  const increaseQuantity = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/cart/update/${item.product._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            quantity: quantity + 1,
          }), // Include productId in the body
        }
      );

      if (!response.ok) {
        // Handle non-successful responses
        const { message } = await response.json();
        throw new Error(message);
      }

      // Handle successful response
      // For example, you may update the quantity state
      setQuantity((prevQuantity) => prevQuantity + 1);
    } catch (error) {
      console.error("Frontend", error);
      setError("An error occurred while updating cart.");
    }
  };

  const decreaseQuantity = async () => {
    const newQuantity = quantity - 1;
    if (newQuantity >= 1) {
      try {
        const response = await fetch(
          `http://localhost:3000/cart/update/${item.product._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
              quantity: newQuantity,
            }), // Include productId in the body
          }
        );

        if (!response.ok) {
          // Handle non-successful responses
          const { message } = await response.json();
          throw new Error(message);
        }

        // Handle successful response
        // For example, you may update the quantity state
        setQuantity(newQuantity);
      } catch (error) {
        console.error("Frontend", error);
        setError("An error occurred while updating cart.");
      }
    }
  };

  const handleRemoveItem = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/cart/remove/${item.product._id}`, // Assuming this is the correct endpoint
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const { message } = await response.json();

      if (!response.ok) {
        console.log(message);
        toast.error(message);
      }
      toast.success(message);
    } catch (error) {
      console.error("Frontend", error);
      setError("An error occurred while removing item from cart.");
    }
  };

  return (
    <div className="py-3 flex items-center px-6 -mx-8 ">
      <div className="flex w-3/5">
        <div className="w-20">
          <img
            src={item.product.image}
            alt=""
            className="h-[50px] w-full object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <div className="font-bold text-sm">{item.product.name}</div>
          <div className="flex items-center space-x-4">
            <button onClick={decreaseQuantity}>
              <FaSquareMinus size={30} />
            </button>
            <p className="bg-white px-5 py-2 rounded-md shadow-md">
              {quantity}
            </p>
            <button onClick={increaseQuantity}>
              <FaSquarePlus size={30} />
            </button>
          </div>
        </div>
      </div>

      <h4
        className="
      font-semibold text- text-sm uppercase w-2/5"
      >
        {item.product.category}
      </h4>
      <h4 className="font-semibold text- text-sm uppercase w-2/5">
        {item.product.price}
      </h4>
      <h4 className="font-semibold text- text-sm uppercase w-2/5">
        {item.product.price * item.quantity}
      </h4>
      <h4
        className="text-red hover:text-redhover cursor-pointer"
        onClick={handleRemoveItem}
      >
        <FaTrash size={25} />
      </h4>
    </div>
  );
};

export default CartFood;
