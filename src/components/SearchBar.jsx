import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city) onSearch(city);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 p-4 w-full max-w-lg">
      <input
        type="text"
        placeholder="Enter city"
        className="border border-gray-300 rounded-md p-2 w-full sm:w-auto flex-1"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition w-full sm:w-auto"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
