import React from "react";
import "./AboutUs.css";
import aboutUsHeader from "@/media/Images/aboutUsHeader.jpg"
import Image from "next/image";
const AboutUsHeader = () => {
  return (
    <div className="aboutHeader-container">
      <div className="aboutHeader-content">
        <h6>ABOUT US</h6>
        <h2>Why We are the Best Hair Salon?</h2>
        <p>Redefine Your Style with Professional Haircare.</p>
      </div>
      <div className="aboutHeader-content">
        <Image
          src={aboutUsHeader}
          alt="About Us Header"
        />
      </div>
    </div>
  );
};

export default AboutUsHeader;
