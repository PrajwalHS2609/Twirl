"use client"
import React from "react";
import "./HomeHeader.css";
import Link from "next/link";
const HomeHeader = () => {
  const handleAppointment = () => {
    const bookPopUpElement = document.querySelector(".book-container");
    if (bookPopUpElement) {
      (bookPopUpElement as HTMLElement).style.visibility = "visible";
    } else {
      console.warn("Element with class 'bookPopUp' not found");
    }
  };
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
          <button onClick={handleAppointment}>BOOK APPOINTMENT</button> <h3>or</h3>
          <button><Link href="/contact-us">CONTACT US</Link></button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
