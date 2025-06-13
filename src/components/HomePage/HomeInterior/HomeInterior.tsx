"use client"

import React from "react";
import "./HomeInterior.css";
import interior5 from "@/media/Images/salonInterior/interior5.jpg";
import interior4 from "@/media/Images/salonInterior/interior4.jpg";
import Image from "next/image";

const HomeInterior = () => {
    const handleAppointment = () => {
    const bookPopUpElement = document.querySelector(".book-container");
    if (bookPopUpElement) {
      (bookPopUpElement as HTMLElement).style.visibility = "visible";
    } else {
      console.warn("Element with class 'bookPopUp' not found");
    }
  };
  return (
    <div className="homeInterior-container">
      <div className="homeInterior-content">
        <span>
          <Image src={interior5} alt="interior 2" />
          <div className="homeInterior-item">
            <h2>Salon Interior</h2>
            <p>You’ll have a relaxing experience and some time for yourself</p>
          </div>
        </span>
      </div>
      <div className="homeInterior-content">
        <span onClick={handleAppointment}>
          {" "}
          <Image src={interior4} alt="interior 1" />
          <div className="homeInterior-item">
            <h2>Book Your Appointment Online</h2>
            <p></p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default HomeInterior;
