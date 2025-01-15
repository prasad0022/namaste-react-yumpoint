import React from "react";

const Search = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for restaurants and food"
        className="search-input"
      />
      <button className="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="search-icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m1.9-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
    </div>
  );
};

export default Search;
