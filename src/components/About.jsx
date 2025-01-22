import React from "react";
import BusinessCard from "./BusinessCard";
import { businessData } from "../utils/mockData";

const About = () => {
  return (
    <div style={{ marginTop: "120px" }}>
      <div className="about-heading">
        <h1>About Us</h1>
        <p>
          Yumpoint is a new-age consumer-first organization offering an
          easy-to-use convenience platform, accessible through a unified app.
        </p>
        <hr style={{ width: "600px", marginTop: "50px" }} />
        <h2>Our Businesses</h2>
      </div>
      <div className="business-card-container">
        {businessData.map((business, index) => (
          <BusinessCard key={index} business={business} />
        ))}
      </div>
    </div>
  );
};

export default About;
