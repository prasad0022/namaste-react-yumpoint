import React, { useState } from "react";
import ResMenu from "./ResMenu";

const ResCategory = ({ data }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="menu-category">
      <div className="category-header" onClick={handleClick}>
        <h1>{`${data.title} (${data.itemCards.length})`}</h1>
        <p>⬇️</p>
      </div>
      {showMenu && (
        <div className="menu-body">
          {data.itemCards.map((data) => (
            <ResMenu key={data.card.info.id} menu={data.card.info} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ResCategory;
