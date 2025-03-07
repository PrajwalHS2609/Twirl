import React from "react";
import "./ServiceHeader.css";
const ServiceHeader = () => {
  return (
    <div className="serviceHeader-container">
      <img
        src="https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <div className="serviceHeader-content">
        <h2>Services</h2>
        <p>
          Transform your look with our expert hair styling services, perfect for
          any occasion.
        </p>
      </div>
    </div>
  );
};

export default ServiceHeader;
