import React from "react";
import HomeServiceMain from "./HomeServiceMain";
import "./HomeService.css";
const HomeService = () => {
  return (
    <div className="homeService-container">
      <div className="homeService-heading">
        <h2>Our Services</h2>
        <p>
          Transform your look, refresh your style! Experience top-notch salon
          services that pamper, perfect, and elevate your beauty. From hair to
          nails, we do it all with finesse! Book your glow-up today!
        </p>
      </div>
      <HomeServiceMain />
    </div>
  );
};

export default HomeService;
