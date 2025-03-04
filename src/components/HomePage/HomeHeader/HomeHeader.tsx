import React from "react";
import "./HomeHeader.css";
const HomeHeader = () => {
  return (
    <div className="homeHeader-container">
      <video src="/Video/HomeBanner.mp4" autoPlay loop muted></video>
      <div className="homeHeader-content">
        <h2>TWIRL</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          provident deleniti deserunt labore velit, distinctio dolore dolorum
          cum tempore praesentium officia quis quo? Voluptates harum ullam,
          ducimus sed consequatur impedit.
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
