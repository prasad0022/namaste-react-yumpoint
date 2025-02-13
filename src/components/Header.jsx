import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import { LOGO_URI } from "../utils/constants";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const onlineStatus = useOnlineStatus();

  const { userName, setName } = useContext(UserContext);

  // Subscribing to the Store using useSelector
  const cartItems = useSelector((store) => store.cart.items);
  const handleClick = () => {
    setIsClicked((preVal) => {
      return !preVal;
    });
    !isClicked ? setName("Prasad") : setName("Guest");
  };

  return (
    <div className="header">
      <div className="company-logo">
        <img src={LOGO_URI} alt="company-logo" />
      </div>
      <div className="header-list">
        <ul>
          <li>
            <NavLink to="/" className="header-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="header-link">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="header-link">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="header-link">
              Cart ({cartItems.length})
            </NavLink>
          </li>
          <button className="login-btn" onClick={handleClick}>
            {isClicked ? "Logout" : "Login"}
          </button>
          <li>
            {userName}{" "}
            <span style={{ fontSize: "9px", position: "absolute" }}>
              {onlineStatus ? "🟢" : "🔴"}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
