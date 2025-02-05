import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/store/cartSlice";

const ResMenu = ({ menu }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItem(menu));
  };

  return (
    <div>
      <hr />
      <div className="res-menu">
        <div>
          {menu.isVeg ? (
            <p style={{ fontSize: "10px" }}>🟢</p>
          ) : (
            <p style={{ fontSize: "10px" }}>🔴</p>
          )}
          <h2 style={{ fontSize: "16px", fontWeight: "500" }}>{menu.name}</h2>
          {menu.price && (
            <h3 style={{ fontSize: "12px" }}>₹ {menu.price / 100}</h3>
          )}
          <p style={{ fontSize: "12px" }}>{menu.category}</p>
        </div>
        <div className="res-menu-btn">
          <button onClick={handleClick}>Add+</button>
        </div>
      </div>
    </div>
  );
};

export default ResMenu;
