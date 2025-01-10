import React from "react";
import { LOGO_URI } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="company-logo">
        <img src={LOGO_URI} alt="company-logo" />
      </div>
      <div className="header-list">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
