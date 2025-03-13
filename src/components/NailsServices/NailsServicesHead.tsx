import Image from "next/image";
import React from "react";
import nailServiceBanner from "@/media/Images/NailService/nailServiceBanner.jpg";
import "@/components/Style/style.css";
const NailsServicesHead = () => {
  return (
    <div className="subHead-container">
      <Image src={nailServiceBanner} alt="nailServiceBanner" />
      <div className="subHead-content">
        <h2>Nail Services</h2>
        <p>
          Twirl presents an exquisite selection of premium nail services, from
          gel and acrylic polish to intricate nail art. Indulge in O.P.I nails,
          stunning chrome finishes, elegant ombre effects, mesmerizing cat eye
          gel polish, classic gel French polish, and luxurious high-shine
          treatments for a flawless, sophisticated look.
        </p>
      </div>
    </div>
  );
};

export default NailsServicesHead;
