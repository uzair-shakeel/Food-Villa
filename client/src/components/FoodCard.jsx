import React from "react";
import { Link } from "react-router-dom";

import { FaSearch, FaHeart, FaStar } from "react-icons/fa";

const FoodCard = ({ item }) => {
  return (
    <div className="food-card hover:scale-105 duration-100 cursor-default shadow-lg bg-gray/10 rounded-xl flex flex-col items-center overflow-hidden">
      <div className="relative mb-3 w-full">
        <div className="h-[200px] overflow-hidden w-full">
          <img src={item.image} alt="" className="w-full object-cover h-full" />
        </div>

        <div className="absolute top-2 left-2">
          <button className="shadow-md text-white bg-red hover:bg-redhover cursor-pointer p-5 rounded-full relative">
            <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </button>
        </div>
        <div className="absolute bottom-2 right-0">
          <button className="h-12 w-24 overflow-hidden shadow-md text-white bg-orange rounded-l-full relative">
            <div className="absolute font-semibold text-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {item.category}
            </div>
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between h-full">
        <div className="flex w-full px-4 items-center justify-between">
          <p className="text-xl cursor-pointer text-center font-bold text-red">
            {item.name.length > 15
              ? `${item.name.substring(0, 15)}...`
              : item.name}
          </p>

          <div className="flex items-center text-sm space-x-2 cursor-pointer">
            <span className="font-normal text-orange">4.5</span>
            <FaStar size={15} className="text-orange" />
            <span className="font-medium">({item?.reviews?.length})</span>
          </div>
        </div>
        <p className="px-4 text-black/70">{item.description}</p>
        <div className="flex justify-between items-center w-full py-3 px-2">
          <h2 className="px-4 text-black text-lg text-start font-semibold">
            Rs. <span className="text-3xl"> {item.price}</span>
          </h2>
          <Link
            to={`/menu/${item._id}`}
            className="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth", // Smooth scrolling behavior
              })
            }
          >
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
