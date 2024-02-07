import React, { useState } from "react";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";

const CartFood = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const totalAmount = quantity * item.price;

  // Function to handle decreasing quantity
  const decreaseQuantity = () => {
    // Ensure quantity does not go below 1
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  return (
    <div className="py-3 flex items-center px-6 -mx-8 ">
      <div className="flex w-3/5">
        <div className="w-20">
          <img
            src={item.image}
            alt=""
            className="h-[50px] w-full object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <div className="font-bold text-sm">{item.name}</div>
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
        {item.category}
      </h4>
      <h4 className="font-semibold text- text-sm uppercase w-2/5">
        {item.price}
      </h4>
      <h4 className="font-semibold text- text-sm uppercase w-2/5">
        {totalAmount}
      </h4>
    </div>
  );
};

export default CartFood;
