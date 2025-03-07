import React from "react";
import "./HomeHeader.css";
const HomeHeader = () => {
  return (
    <div className="homeHeader-container">
      <video src="/Video/HomeBanner.mp4" autoPlay loop muted></video>
      <div className="homeHeader-content">
        <h2>TWIRL LIFESTYLE</h2>
        <p>
          Step into luxury at our premium unisex salon, where style meets
          sophistication! From flawless haircuts to indulgent spa treatments, we
          bring out the best in you. Because you deserve nothing but the finest!
        </p>
        <div className="homeHeader-button">
          <button>BOOK APPOINTMENT</button> <h3>or</h3>
          <button>CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
