import React from "react";
import "@/components/Style/style.css";
import Image from "next/image";
import olaplexBanner from "@/media/Images/HairTreatment/olplexBanner.jpg";
const OlaplexHairTreatmentsHeader = () => {
  return (
    <div className="subHead-container">
      <Image src={olaplexBanner} alt="Olaplex Banner" />
      <div className="subHead-content">
        <h2>Olaplex Hair Treatments</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsum ea
          laboriosam! Et error sapiente debitis explicabo numquam facere, odio
          mollitia veritatis vel perferendis vitae ipsam. Magni aut voluptatum
          laudantium?
        </p>
      </div>
    </div>
  );
};

export default OlaplexHairTreatmentsHeader;
