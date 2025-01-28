import React from "react";
import ResCard, { withOfferCard } from "./ResCard";
import ShimmerCard from "./ShimmerCard";
import Search from "./Search";
import { Link } from "react-router";
import { useRestaurants } from "../utils/useRestaurants"; // Custom Hook to get restaurant lists & related features.

const Body = () => {
  const { filterRestaurants, handleSearch, handleTopResFilter } =
    useRestaurants();

  const ResCardWithOffer = withOfferCard(ResCard);

  return (
    <div className="body-container">
      <Search onSearch={handleSearch} />
      <div className="filter-container">
        <button className="filter-btn" onClick={handleTopResFilter}>
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
            <Link
              to={`/restaurant/${res.info.id}`}
              className="res-card-link"
              key={res.info.id}
            >
              {res.info.aggregatedDiscountInfoV3 === undefined ? (
                <ResCard key={res.info.id} res={res.info} />
              ) : (
                <ResCardWithOffer key={res.info.id} res={res.info} />
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
