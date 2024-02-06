import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
import NewArrival from "./NewArrival";
import { useCartContext } from "../context/cartContext";

const Product = () => {
  // Get the id from the URL parameters
  const { id } = useParams();

  // Fetch data based on the id
  const { apiData: food, error } = useFetch(
    `http://localhost:3000/food/foods/${id}`
  );

  // Initialize quantity state with a default value of 1
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCartContext();

  useEffect(() => {
    // Scroll to the top of the page when the component mounts or updates
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling behavior
    });
  }, []);

  if (!food) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Function to handle increasing quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Function to handle decreasing quantity
  const decreaseQuantity = () => {
    // Ensure quantity does not go below 1
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <section className="py-3 px-2 sm:px-4 md:px-6 section">
      <div className="container mx-auto py-[14vh]">
        <div className="grid grid-cols-1 px-6 relative lg:grid-cols-2 gap-8 py-8 items-center">
          <div className="flex justify-center items-center w-full">
            <img
              src={food.image}
              alt="Home Page Pic"
              className="h-[350px] max-w-full rounded-lg"
            />
          </div>

          <div className="flex flex-col gap-9">
            <div className="text-2xl md:text-3xl font-bold text-red lg:text-4xl">
              {food.name}
              <p className="text-lg font-light md:text-xl my-4 text-black leading-9 ">
                {food.description}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-orange text-2xl font-semibold">Quantity</p>
              <div className="flex gap-2 items-center">
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
            <h2 className="text-xl font-bold">
              Rs. <span className="text-4xl">{food.price}</span>
            </h2>
            <div className="gap-4 flex">
              <button
                onClick={() => addToCart(food)}
                className="buttonn bg-orange hover:bg-orangehover w-full"
              >
                Add to Cart
              </button>
              <button className="button w-full">Order Now</button>
            </div>
          </div>
        </div>
        <NewArrival />
      </div>
    </section>
  );
};

export default Product;
