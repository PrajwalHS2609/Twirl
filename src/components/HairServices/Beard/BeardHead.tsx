import Image from "next/image";
import React from "react";
import beardBanner from "@/media/Images/Beard/beardBanner.jpg";
import "@/components/Style/style.css";

const BeardHead = () => {
  return (
    <div className="subServiceHead-container">
      <div className="subServiceHead-content">
        <Image src={beardBanner} alt="Beard Banner" />
      </div>
      <div className="subServiceHead-content">
        <h6>HAIR SERVICE</h6>
        <h2>Beard Styling</h2>
        <p>
          Beard styling involves shaping and grooming facial hair to create a
          polished, well-defined look. Whether it's trimming, shaping, or adding
          texture, professional beard styling enhances your features and
          complements your overall style.
        </p>
      </div>
    </div>
  );
};

export default BeardHead;
