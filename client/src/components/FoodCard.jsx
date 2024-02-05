import React from "react";

import { FaSearch, FaHeart, FaStar } from "react-icons/fa";

const FoodCard = ({ item }) => {
  return (
    <div className="food-card bg-orange/10 rounded-xl flex flex-col cursor-pointer items-center overflow-hidden">
      <div className="relative mb-3">
        <div className="h-[200px] overflow-hidden w-full">
          <img src={item.image} alt="" className="w-full h-full" />
        </div>

        <div className="absolute top-2 left-2">
          <button className="shadow-md text-white bg-red hover:bg-redhover cursor-pointer p-5 rounded-full relative">
            <FaHeart className="absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </button>
        </div>
        <div className="absolute bottom-2 right-2">
          <button className="h-12 w-12 overflow-hidden shadow-md text-white bg-orange hover:bg-orangehover cursor-pointer p-5 rounded-full relative">
            <div className="absolute font-semibold text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {item.price}
            </div>
          </button>
        </div>
      </div>

      <div className="flex w-full px-4 items-center justify-between">
        <p className="text-xl text-center font-bold text-red">{item.name}</p>
        <div className="flex items-center text-sm space-x-2 cursor-pointer">
          <span className="font-normal text-orange">4.5</span>
          <FaStar size={15} className="text-orange" />
          <span className="font-medium">({item?.reviews?.length})</span>
        </div>
      </div>
      <button className="bg-red active:scale-95 transition duration-100 transform hover:shadow-xl shadow-md rounded-md my-5 px-8 py-2 text-xl font-medium text-white ">
        Order Now
      </button>
    </div>
  );
};

export default FoodCard;
