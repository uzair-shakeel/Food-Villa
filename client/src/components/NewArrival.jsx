import React from "react";
import useFetch from "../hooks/useFetch";
import FoodCard from "../components/FoodCard";
import BASE_URL from "../utils/config";

const NewArrival = () => {
  const { apiData: foods, error } = useFetch(`${BASE_URL}/food/new`);
  return (
    <section className="py-3 px-10 sm:px-4 md:px-6">
      <div className="container mx-auto py-[2vh]">
        <div className="text-2xl md:text-3xl font-bold text-center text-black lg:text-4xl">
          New <span className="text-red">arrival</span>
        </div>

        {foods && foods.length > 0 ? (
          <div className="grid py-6 lg:grid-cols-4 gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
            {foods.map((item) => (
              <FoodCard item={item} key={item._id} />
            ))}
          </div>
        ) : (
          <p className="text-md my-8 text-center md:text-2xl font-paraFont">
            No items available.
          </p>
        )}
      </div>
    </section>
  );
};

export default NewArrival;
