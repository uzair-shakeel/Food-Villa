import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BASE_URL from "../utils/config";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}/food/search?keyword=${searchTerm}`
      );
      const result = await response.json();
      if (response.ok) {
        navigate(`/food/search?keyword=${searchTerm}`, {
          state: result.data,
        });
        location.reload();
      } else {
        toast.error(result.message);
      }
      setLoading(false);
    } catch (error) {
      setError("An error occurred while fetching data");
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex rounded-lg py-2 px-4 justify-between items-center bg-white shadow-md">
      <div className="flex items-center w-full">
        <FaSearch size={15} className="text-gray" />
        <input
          type="text"
          placeholder="Search for food..."
          className="text-black w-full border-none outline-none py-2 px-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <button
        className="h-10 w-10 cursor-pointer relative bg-orange rounded-lg"
        onClick={handleSearch}
        disabled={loading}
      >
        <FaSearch
          size={20}
          className="cursor-pointer text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </button>
    </div>
  );
};

export default SearchBar;
