import React from "react";
import "./HomeAbout.css";
const HomeAbout = () => {
  return (
    <div className="homeAbout-container">
      <div className="homeAbout-content">
        <h2>Twirl Lifestyle – Where Beauty Meets Luxury! ✨</h2>
        {/* <h6>Bespoke colour services, beautiful hairdressing</h6> */}
        <p>
          Experience premium beauty and wellness at Twirl Lifestyle, Mangalore’s
          finest unisex salon. Our expert stylists and therapists bring
          elegance, precision, and indulgence to every service—be it a chic
          haircut, rejuvenating facial, or luxurious spa treatment.
        </p>
        <p>
          With world-class products and cutting-edge techniques, we ensure you
          leave feeling confident and radiant. Step into a space where
          sophistication meets comfort, and let us pamper you with perfection.
        </p>
        <p>
          At Twirl Lifestyle, beauty isn’t just a look—it’s a feeling. Come,
          indulge in the ultimate salon experience!
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
