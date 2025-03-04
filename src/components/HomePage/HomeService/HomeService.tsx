import React from "react";
import HomeServiceMain from "./HomeServiceMain";
import "./HomeService.css";
const HomeService = () => {
  return (
    <div className="homeService-container">
      <div className="homeService-heading">
        <h2>Our Services</h2>
      </div>
      <HomeServiceMain />
    </div>
  );
};

export default HomeService;
