import React from "react";
import "./HomeAbout.css";
const HomeAbout = () => {
  return (
    <div className="homeAbout-container">
      <div className="homeAbout-content">
        <h2>A World Class Hair Company</h2>
        <h6>Bespoke colour services, beautiful hairdressing</h6>
        <p>
          The Alex Wilson salons offer world class colour services and
          beautiful, bespoke hairdressing. Alex is an award winning colourist
          that has handpicked and trained his teams to deliver the very best
          personalised colour, style and experience. Every team member is
          respectful, inclusive and inspired to deliver a tailored style that
          supports a unique philosophy – natural beauty enhancement in hair.
        </p>
        <button>FIND OUT MORE</button>
      </div>
      <div className="homeAbout-content">
        <img
          src="https://img.freepik.com/free-photo/three-types-beauty_1163-2543.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid"
          alt=""
        />
      </div>
    </div>
  );
};

export default HomeAbout;
