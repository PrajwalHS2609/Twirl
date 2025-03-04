import React from "react";
import "./HomeInterior.css";
import Link from "next/link";
const HomeInterior = () => {
  return (
    <div className="homeInterior-container">
      <div className="homeInterior-content">
        <Link href="/">
          <img
            src="https://img.freepik.com/free-photo/interior-latino-hair-salon_23-2150555185.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid"
            alt=""
          />
          <div className="homeInterior-item">
            <h2>Salon Interior</h2>
            <p>You’ll have a relaxing experience and some time for yourself</p>
          </div>
        </Link>
      </div>
      <div className="homeInterior-content">
        <Link href="/">
          {" "}
          <img
            src="https://img.freepik.com/free-photo/3d-rendering-spa-massage-wellness-hotel-suite-with-bathtub_105762-2027.jpg?t=st=1741098480~exp=1741102080~hmac=0aef909ec14f1cb673f3a13a92717b63d90a5a56541f6c929a3a5a840ad03589&w=1380"
            alt=""
          />
          <div className="homeInterior-item">
            <h2>Book Your Appointment Online</h2>
            <p></p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeInterior;
