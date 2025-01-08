import React from "react";

const ResCard = (props) => {
  const { resName, cuisine, img, rating } = props.res;

  return (
    <div className="res-card">
      <img src={img} alt="res-logo" />
      <div className="res-info">
        <h3 className="res-name">{resName}</h3>
        <h4 className="cuisine">{cuisine}</h4>
        <h4 className="rating">{rating} ⭐</h4>
      </div>
    </div>
  );
};

export default ResCard;
