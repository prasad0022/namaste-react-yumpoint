import React from "react";
import { removeItem } from "../utils/store/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(item.id));
  };

  return (
    <div>
      <div className="cart-item">
        <div className="item-info">
          {item.isVeg ? (
            <p style={{ fontSize: "10px" }}>🟢</p>
          ) : (
            <p style={{ fontSize: "10px" }}>🔴</p>
          )}
          <h2 style={{ fontSize: "20px", fontWeight: "500" }}>{item.name}</h2>
          <p style={{ fontSize: "12px" }}>{item.category}</p>
        </div>
        <div className="item-prize">
          <h1 style={{ fontSize: "18px" }}>₹ {item.price / 100}</h1>
          <button onClick={handleRemoveItem}>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
