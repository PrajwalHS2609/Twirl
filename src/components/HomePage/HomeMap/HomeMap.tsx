import React from "react";
import "./HomeMap.css";
const HomeMap = () => {
  return (
    <div className="homeMap-container">
      <h2>Our Location</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3519.651807887862!2d74.842860275075!3d12.885726087421792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b8ceb3f1c37%3A0x2ad8a35b91863b11!2sTwirl%20Lifestyle%20%7C%20HAIR%20%26%20BEAUTY%20SALON!5e1!3m2!1sen!2sin!4v1741436806509!5m2!1sen!2sin"
        width="600"
        height="450"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default HomeMap;
