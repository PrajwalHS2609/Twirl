import React from "react";
import "@/components/Style/style.css";
import hairTreatmentBanner from "@/media/Images/HairTreatment/hairTreatmentBanner.jpg";
import Image from "next/image";
import "@/components/Style/style.css";

const HairTreatmentHead = () => {
  return (
    <div className="subServiceHead-container">
      <div className="subServiceHead-content">
        <Image src={hairTreatmentBanner} alt="hair Treatment Banner" />
      </div>
      <div className="subServiceHead-content">
        <h6>HAIR SERVICE</h6>
        <h2>Hair Treatment</h2>
        <p>
          Hair treatment is a therapeutic process that revitalizes and nourishes
          the hair, improving its texture, strength, and shine. It helps address
          issues like dryness, damage, frizz, and split ends, leaving your hair
          healthier, smoother, and more manageable.
        </p>
      </div>
    </div>
  );
};

export default HairTreatmentHead;
