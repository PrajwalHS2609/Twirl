import Image from "next/image";
import React from "react";
import BeautyServiceBanner from "@/media/Images/WaxingService/beautyServiceBanner.jpg";
import "@/components/Style/style.css";

const BeautyEssentialServicesHead = () => {
  return (
    <div className="subHead-container">
      <Image src={BeautyServiceBanner} alt="facialServiceBanner" />
      <div className="subHead-content">
        <h2>Waxing Services</h2>
        <p>
          Explore the luxurious services at Twirl Salon, where beauty meets
          precision. Indulge in our exclusive Bikini & Brazilian waxing,
          featuring gentle peel-off or soothing cartridge wax for a flawless
          finish. Reveal your skin’s natural glow with our premium detanning
          treatments, and turn back time with our advanced anti-aging regimens,
          including mesotherapy and other rejuvenating techniques. Experience
          the ultimate in self-care—book your appointment today and let us
          pamper you to perfection!
        </p>
      </div>
    </div>
  );
};

export default BeautyEssentialServicesHead;
