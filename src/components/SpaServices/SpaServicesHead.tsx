import Image from "next/image";
import React from "react";
import spaServiceBanner from "@/media/Images/SpaService/spaServiceBanner.jpg";
import "@/components/Style/style.css";

const SpaServicesHead = () => {
  return (
    <div className="subHead-container">
      <Image src={spaServiceBanner} alt="spaServiceBanner" />
      <div className="subHead-content">
        <h2>Spa Services</h2>
        <p>
          Relax, rejuvenate, and restore with our luxurious spa services
          designed to soothe your body, mind, and soul. Experience ultimate
          wellness through personalized treatments, calming ambiance, and expert
          care.
        </p>
      </div>
    </div>
  );
};

export default SpaServicesHead;
