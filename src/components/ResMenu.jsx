import React from "react";

const ResMenu = ({ menu }) => {
  return (
    <div>
      <hr style={{ marginTop: "30px" }} />
      <div className="res-menu">
        {menu.isVeg ? <p>🟢</p> : <p>🔴</p>}
        <h2>{menu.name}</h2>
        {menu.price && <h3>₹ {menu.price / 100}</h3>}
        <p>{menu.category}</p>
      </div>
    </div>
  );
};

export default ResMenu;
