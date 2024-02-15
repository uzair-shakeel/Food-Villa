import React, { useState } from "react";
import { FaSquareMinus, FaSquarePlus, FaTrash } from "react-icons/fa6";
import { toast } from "react-toastify";
import BASE_URL from "../utils/config";

const CartFood = ({ item }) => {
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const [quantity, setQuantity] = useState(item.quantity);

  const increaseQuantity = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/cart/update/${item.product._id}`,
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
          `${BASE_URL}/cart/update/${item.product._id}`,
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
        `${BASE_URL}/cart/remove/${item.product._id}`, // Assuming this is the correct endpoint
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
    <tr className="border-b border-gray-200">
      <td className="py-3 pr-2 md:px-6 text-left w-2/5">
        <div className="flex flex-col md:flex-row items-center  gap-4 flex-grow">
          <img
            src={item.product.image}
            alt=""
            className="h-[30px] md:h-[50px] w-[50px] md:w-20 object-cover rounded-md mr-3"
          />
          <div className="font-bold text-xs md:text-sm">
            {item.product.name}
          </div>
        </div>
      </td>
      <td className="px-4">
        <div className="flex items-center justify-center">
          <button onClick={decreaseQuantity} className="mr-2">
            <FaSquareMinus size={25} />
          </button>
          <p className="bg-white px-3 py-1 rounded-md shadow-md">{quantity}</p>
          <button onClick={increaseQuantity} className="ml-2">
            <FaSquarePlus size={25} />
          </button>
        </div>
      </td>
      <td className="py-3 px-6 text-center hidden md:table-cell">
        {item.product.category}
      </td>
      <td className="py-3 px-6 text-center hidden md:table-cell">
        {item.product.price}
      </td>
      <td className="py-3 px-2 md:px-6 text-center">
        {item.product.price * item.quantity}
      </td>
      {/* <td className="py-3 px-6 text-left"></td> */}
      <td className="py-3 px-2 md:px-6 text-center">
        <button onClick={handleRemoveItem}>
          <FaTrash
            size={20}
            className="text-red hover:text-redhover hover:scale-125 hover:rotate-6 duration-150"
          />
        </button>
      </td>
    </tr>
  );
};

export default CartFood;
