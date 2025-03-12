import React from "react";
import "@/components/Style/style.css";
import Image from "next/image";
import hairServiceBanner from "@/media/Images/HairService/hairServiceBanner.jpg";
const HairHead = () => {
  return (
    <div className="subHead-container">
      <Image src={hairServiceBanner} alt="hairServiceBanner" />
      <div className="subHead-content">
        <h2>Hair Services</h2>
        <p>
          Experience the ultimate hair transformation at Twirl Hair Salon! From
          precision haircuts to vibrant coloring, rejuvenating hair spas, and
          expert smoothening treatments, our skilled stylists ensure you leave
          looking and feeling your best. Step in for a style upgrade today!
        </p>
      </div>
    </div>
  );
};

export default HairHead;
