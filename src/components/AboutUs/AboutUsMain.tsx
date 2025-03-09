import React from "react";
import "./AboutUs.css";

const AboutUsMain = () => {
  return (
    <div className="aboutMain-container">
      <div className="aboutMain-content">
        <div className="aboutMain-item">
          <img
            src="https://img.freepik.com/free-photo/woman-drying-hair-hairsalon_1157-27191.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid"
            alt=""
          />
        </div>
        <div className="aboutMain-item">
          <h3>Welcome to Twirl Salon </h3>
          <p>
            Community is everything at Corlears. It’s who we are and how things
            get done. Everyone here is motivated by a deep commitment to making
            sure each child and family feels welcome and included. When everyone
            feels like they belong, we are stronger and smarter together. We’re
            a community driven to make the world a better place—starting in our
          </p>
        </div>
      </div>
      <div className="aboutMain-content">
        <div className="aboutMain-item">
          <h3>Our Story</h3>
          <p>
            Our curriculum appeals to student diversity and interest, and is
            rigorous and challenging. We understand each child comes to us with
            different talents, learning styles, and identities. And we celebrate
            that difference because our diversity is our strength.
          </p>
        </div>
        <div className="aboutMain-item">
          <img
            src="https://img.freepik.com/free-photo/woman-makeup-artist-looking-phone_23-2148332485.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsMain;
