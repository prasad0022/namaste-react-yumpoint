import React from "react";

const ResMenu = ({ menu }) => {
  return (
    <div>
      <hr style={{ marginTop: "30px" }} />
      <div className="res-menu">
        {menu.isVeg ? <p>🟢</p> : <p>🔴</p>}
        <h2>{menu.name}</h2>
        <h3>₹ {menu.defaultPrice / 100}</h3>
        <p>{menu.description}</p>
      </div>
    </div>
  );
};

export default ResMenu;
