"use client";
import "./Reviews.css";
import React from "react";
const Reviews = () => {
  return (
    <div className="reviewsContainer">
      <h2>
        What Our <span>Customer</span> says
      </h2>
      <iframe
        src="https://widgets.sociablekit.com/google-reviews/iframe/25684099"
        frameborder="0"
        width="100%"
        height="1000px"
      ></iframe>
    </div>
  );
};

export default Reviews;
