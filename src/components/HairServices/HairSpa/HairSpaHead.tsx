import Image from "next/image";
import React from "react";
import hairSpaBanner from "@/media/Images/HairSpa/hairSpaBanner.jpg";
import "@/components/Style/style.css";

const HairSpaHead = () => {
  return (
    <div className="subServiceHead-container">
      <div className="subServiceHead-content">
        <Image src={hairSpaBanner} alt="hairSpa Banner" />
      </div>
      <div className="subServiceHead-content">
        <h6>HAIR SERVICE</h6>
        <h2>Hair Spa</h2>
        <p>
          Hair Spa is a nourishing treatment that revitalizes your hair, leaving
          it soft, smooth, and deeply hydrated. It repairs damage, enhances
          shine, and promotes healthy growth with a relaxing, rejuvenating
          experience.
        </p>
      </div>
    </div>
  );
};

export default HairSpaHead;
