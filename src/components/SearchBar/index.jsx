import React, { memo } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchbar.css"

const SearchBar = memo((props) => {
  return (
    <div className="searchBar flex flex-row">
      <input type="text" name="searchBar" className="searchBar-input p-1 rounded-l-md border border-gray-100"></input>
      <button type="button" className="p-2 bg-blue-500 border-r-amber-50 rounded-r-md">
        <FaSearch />
      </button>
    </div>
  );
});

export default SearchBar;
