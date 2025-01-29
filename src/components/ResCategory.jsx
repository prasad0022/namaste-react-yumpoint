import React from "react";

const ResCategory = ({ data }) => {
  return (
    <div className="menu-category">
      <div className="category-header">
        <h1>{`${data.title} (${data.itemCards.length})`}</h1>
        <p>⬇️</p>
      </div>
    </div>
  );
};

export default ResCategory;
