import React from "react";
import "@/components/Style/style.css";
import Image from "next/image";
import hairCutStylingBanner from "@/media/Images/HairStyling/hairStylingBanner.jpg";
const HairCutStylingHead = () => {
  return (
    <div className="subServiceHead-container">
      <div className="subServiceHead-content">
        <Image src={hairCutStylingBanner} alt="hairCut Styling Banner" />
      </div>
      <div className="subServiceHead-content">
        <h6>HAIR SERVICE</h6>
        <h2>Haircut And Styling</h2>
        <p>
          Haircut and Styling offers a fresh, personalized look tailored to your
          face shape and style. From trendy cuts to flawless finishes, enjoy a
          transformation that leaves you feeling confident and polished.
        </p>
      </div>
    </div>
  );
};

export default HairCutStylingHead;
