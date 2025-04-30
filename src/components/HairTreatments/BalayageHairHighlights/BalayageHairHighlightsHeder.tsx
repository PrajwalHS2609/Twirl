import React from "react";
import "@/components/Style/style.css";
import Image from "next/image";
import hairServiceBanner from "@/media/Images/HairService/hairServiceBanner.jpg";
const BalayageHairHighlightsHeader = () => {
  return (
    <div className="subHead-container">
      <Image src={hairServiceBanner} alt="hairServiceBanner" />
      <div className="subHead-content">
        <h2>Balayage Hair Highlights</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, nam
          at quia sunt ex voluptatibus, quas ipsa, harum atque repellat
          architecto neque vel perferendis omnis. Incidunt pariatur sapiente
          modi perferendis!
        </p>
      </div>
    </div>
  );
};

export default BalayageHairHighlightsHeader;
