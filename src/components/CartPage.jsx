import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="cart-container" style={{ marginTop: "110px" }}>
          <p>🛒</p>
          <h1>Your cart is empty</h1>
          <h2>You can go to home page to view more restaurants</h2>
        </div>
      ) : (
        <div className="cart-items-container" style={{ marginTop: "120px" }}>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default CartPage;
