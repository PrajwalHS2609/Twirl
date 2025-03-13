import Image from "next/image";
import React from "react";
import facialServiceBanner from "@/media/Images/FacialService/facialServiceBanner.jpg";
import "@/components/Style/style.css";
const FacialServicesHead = () => {
  return (
    <div className="subHead-container">
      <Image src={facialServiceBanner} alt="facialServiceBanner" />
      <div className="subHead-content">
        <h2>Facial Services</h2>
        <p>
          If you're looking to refresh and restore a youthful glow to your skin,
          Twirl offers the perfect indulgence. Their mood-enhancing and
          skin-soothing treatments are designed to rejuvenate your complexion,
          leaving you radiant and revitalized. Instead of endlessly searching
          for "facial for glowing skin" or "facial offers near me," pamper
          yourself with Twirl’s luxurious, results-driven experience.
        </p>
      </div>
    </div>
  );
};

export default FacialServicesHead;
