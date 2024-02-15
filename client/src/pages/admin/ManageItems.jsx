import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import ItemsCard from "../../components/Admin/ItemsCard";
import BASE_URL from "../../utils/config";

const ManageItems = () => {
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
    { id: 0, name: "All", value: "" },
    { id: 1, name: "Fast Food", value: "fastFood" },
    { id: 2, name: "BBQ", value: "bbq" },
    { id: 3, name: "Chinese", value: "chinese" },
    { id: 4, name: "Italian", value: "italian" },
    { id: 5, name: "Desi", value: "desi" },
    { id: 6, name: "Dessert", value: "dessert" },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This will animate the scroll
    });
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
                <ItemsCard item={item} key={item._id} />
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

export default ManageItems;
