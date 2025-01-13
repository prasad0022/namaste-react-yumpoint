import React from "react";
import { RES_IMG_URI } from "../utils/constants";

const ResCard = (props) => {
  const { name, cuisines, cloudinaryImageId, avgRating } = props.res;

  return (
    <div className="res-card">
      <img src={RES_IMG_URI + cloudinaryImageId} alt="res-logo" />
      <div className="res-info">
        <h3 className="res-name">{name}</h3>
        <h4 className="cuisine">{cuisines.join(", ")}</h4>
        <h4 className="rating">{avgRating} ⭐</h4>
      </div>
    </div>
  );
};

export default ResCard;
