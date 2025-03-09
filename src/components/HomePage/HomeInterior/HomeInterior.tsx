import React from "react";
import "./HomeInterior.css";
import Link from "next/link";
import interior1 from "@/media/Images/Interior/interior1.png";
import interior2 from "@/media/Images/Interior/interior2.jpg";
import Image from "next/image";

const HomeInterior = () => {
  return (
    <div className="homeInterior-container">
      <div className="homeInterior-content">
        <Link href="/">
          <Image src={interior2} alt="interior 2" />
          <div className="homeInterior-item">
            <h2>Salon Interior</h2>
            <p>You’ll have a relaxing experience and some time for yourself</p>
          </div>
        </Link>
      </div>
      <div className="homeInterior-content">
        <Link href="/">
          {" "}
          <Image src={interior1} alt="interior 1" />
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
