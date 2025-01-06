import React from "react";
import ResCard from "./ResCard.jsx";
import { resList } from "../list/resList.js";

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-container">Search</div>
      <div className="res-card-container">
        {resList.map((res, index) => (
          <ResCard res={res} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
