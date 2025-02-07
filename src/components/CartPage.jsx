import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { clearCart } from "../utils/store/cartSlice";
import { useDispatch } from "react-redux";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

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
          <div className="clear-cart">
            <button onClick={handleClearCart}>Clear Cart</button>
          </div>
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default CartPage;
