import React, { memo } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchbar.css"

const SearchBar = memo((props) => {
  return (
    <div className="searchBar flex flex-row">
      <input type="text" name="searchBar" className="searchBar-input p-1 px-4 rounded-l-md border border-gray-100" placeholder="Search here"></input>
      <button type="button" className="p-2 bg-[#1f2c73] border-r-amber-50 rounded-r-md" >
        <FaSearch fill="white"/>
      </button>
    </div>
  );
});

export default SearchBar;
