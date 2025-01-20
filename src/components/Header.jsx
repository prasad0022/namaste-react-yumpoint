import React, { useState } from "react";
import { Link } from "react-router";
import { LOGO_URI } from "../utils/constants";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((preVal) => {
      return !preVal;
    });
  };

  return (
    <div className="header">
      <div className="company-logo">
        <img src={LOGO_URI} alt="company-logo" />
      </div>
      <div className="header-list">
        <ul>
          <li>
            <Link to="/" className="header-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="header-link">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="header-link">
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <button className="login-btn" onClick={handleClick}>
            {isClicked ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
