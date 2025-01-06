import React from "react";

const ResCard = () => {
  return (
    <div className="res-card">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sidigb8zqjfrfpkrtqgl"
        alt="res-logo"
      />
      <div className="res-info">
        <h3 className="res-name">Meghana Foods</h3>
        <h4 className="cuisine">South Indian, Biryani, Asian</h4>
        <h4 className="rating">4.4 ⭐</h4>
      </div>
    </div>
  );
};

export default ResCard;
