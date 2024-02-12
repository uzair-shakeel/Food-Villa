import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import FoodCard from "../components/FoodCard";
import SearchBar from "../shared/SearchBar";

const SearchPage = () => {
  const location = useLocation();

  const [data] = useState(location.state);

  return (
    <div className="pt-14 py-3 px-10 sm:px-4 md:px-6 section">
      <div className="container mx-auto py-8 min-h-screen">
        <div className="max-w-full md:max-w-[60%] lg:max-w-[40%] mx-auto">
          <SearchBar className="" />
        </div>
        <div className="grid py-6 lg:grid-cols-4 gap-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {data?.length === 0 ? (
            <h4>No Result Found</h4>
          ) : (
            data?.map((item) => (
              <div key={item._id}>
                <FoodCard item={item} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
