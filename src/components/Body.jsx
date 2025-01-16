import React, { useState, useEffect } from "react";
import ResCard from "./ResCard";
import ShimmerCard from "./ShimmerCard";
import Search from "./Search";

const Body = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
      );
      const jsonData = await data.json();

      const restaurants =
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setRestaurantsList(restaurants);
      setFilterRestaurants(restaurants);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (serachString) => {
    const filterRes = restaurantsList.filter((res) =>
      res.info.name.toLowerCase().includes(serachString.toLowerCase())
    );
    setFilterRestaurants(filterRes);
  };

  return (
    <div className="body-container">
      <Search onSearch={handleSearch} />
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filterRes = filterRestaurants.filter(
              (res) => res.info.avgRating >= 4
            );
            setFilterRestaurants(filterRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      {filterRestaurants?.length === 0 ? (
        <div className="shimmer-card-container">
          {Array.from({ length: 8 }).map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      ) : (
        <div className="res-card-container">
          {filterRestaurants.map((res) => (
            <ResCard key={res.info.id} res={res.info} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
