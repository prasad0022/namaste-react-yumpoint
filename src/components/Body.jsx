import React, { useState } from "react";
import ResCard from "./ResCard";
import { resList } from "../utils/mockData";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState(resList);

  return (
    <div className="body-container">
      <div className="search-container">Search</div>
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filterRes = resList.filter((res) => res.rating >= 4);
            setRestaurantsList(filterRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-card-container">
        {restaurantsList.map((res) => (
          <ResCard key={res.id} res={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
