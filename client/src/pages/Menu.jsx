import axios from "axios";
import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import FoodCard from "../components/FoodCard";
import Card from "../components/Card";
import fastfood from "../assets/menu/Home.png";
import desi from "../assets/menu/desi.png";
import bbq from "../assets/menu/bbq.png";
import chinese from "../assets/menu/chinese.png";
import italian from "../assets/menu/italian.png";
import desert from "../assets/menu/desert.png";
import all from "../assets/menu/Home.png";
import BASE_URL from "../utils/config";

const Menu = () => {
  // const [foods, setFoods] = useState([]);
  const [active, setActive] = useState(0);
  const [value, setValue] = useState({
    id: 0,
    name: "All",
    value: "",
  });
  const { apiData: foods, error } = useFetch(
    `${BASE_URL}/food?category=${value.value}`
  );
  const categories = [
    { id: 0, name: "All", value: "", img: all },
    { id: 1, name: "Fast Food", value: "fastFood", img: fastfood },
    { id: 2, name: "BBQ", value: "bbq", img: bbq },
    { id: 3, name: "Chinese", value: "chinese", img: chinese },
    { id: 4, name: "Italian", value: "italian", img: italian },
    { id: 5, name: "Desi", value: "desi", img: desi },
    { id: 6, name: "Dessert", value: "dessert", img: desert },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-[16vh] section">
      <div className="container mx-auto py-8">
        <div className="p-5 mr-5 mb-14">
          <div className="flex flex-wrap justify-center gap-2 font-cursiveFont">
            {categories?.map((btn) => (
              <button
                key={btn.id} // Add a key to each button for React to keep track of them
                className={
                  active === btn.id
                    ? `text-xl px-4 py-3 text-center text-white bg-red border-redhover border-2 rounded-lg justify-center font-medium`
                    : `text-xl px-4 py-3 text-red border-redhover rounded-lg border-2 font-medium`
                }
                onClick={() => {
                  setActive(btn.id);
                  setValue(btn);
                }}
              >
                {/* <img src={btn.img} className=" h-[100px]" alt="" /> */}
                {btn.name}
              </button>
            ))}
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
      </div>
    </div>
  );
};

export default Menu;
