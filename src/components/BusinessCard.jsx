import React from "react";

class BusinessCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, logo, description } = this.props.business;
    return (
      <div className="business-card">
        <p style={{ fontSize: "50px", margin: "0" }}>{logo}</p>
        <h1 style={{ color: "rgb(251, 112, 5)", fontSize: "28px" }}>{name}</h1>
        <hr />
        <p style={{ marginTop: "30px" }}>{description}</p>
      </div>
    );
  }
}

export default BusinessCard;
