import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/food/search?keyword=${searchTerm}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setSearchResults(data.data);
      console.log(searchResults);
      setLoading(false);
    } catch (error) {
      setError("An error occurred while fetching data");
      setLoading(false);
    }
  };

  return (
    <div className="flex rounded-full py-2 px-4 justify-between items-center bg-white  shadow-md">
      <div className="flex items-center w-full">
        <FaSearch size={15} className="text-gray" />
        <input
          type="text"
          placeholder="Search for food..."
          className="text-black w-full border-none outline-none py-2 px-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <button
        className="h-10 w-10 cursor-pointer relative bg-orange rounded-full"
        onClick={handleSearch}
        disabled={loading}
      >
        <FaSearch
          size={20}
          className="cursor-pointer text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </button>
      {error && <p className="text-red-500">{error}</p>}
      {loading && <p>Loading...</p>}
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((food) => (
            <li key={food._id}>{food.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
