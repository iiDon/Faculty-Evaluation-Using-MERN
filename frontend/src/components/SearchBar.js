import React from "react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <input
      type="search"
      id="default-search"
      className="p-2 mt-4 w-full text-sm text-third bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-third outline-none"
      placeholder="ابحث..."
      required
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchBar;
