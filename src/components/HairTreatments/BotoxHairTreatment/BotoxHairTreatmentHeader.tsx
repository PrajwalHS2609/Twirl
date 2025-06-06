import React from "react";
import "@/components/Style/style.css";
import Image from "next/image";
import botoxBanner from "@/media/Images/HairTreatment/botoxBanner.jpg";
const BotoxHairTreatmentHeader = () => {
  return (
    <div className="subHead-container">
      <Image src={botoxBanner} alt="Botox Banner" />
      <div className="subHead-content">
        <h2>Botox Hair Treatment</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolorem
          reiciendis officiis pariatur! Animi nisi aspernatur odio maxime, iure
          quas possimus ea officia obcaecati aut necessitatibus soluta
          temporibus molestiae accusantium!
        </p>
      </div>
    </div>
  );
};

export default BotoxHairTreatmentHeader;
