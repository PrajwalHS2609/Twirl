import React from "react";
import "@/components/Style/style.css";
import Image from "next/image";
import hairCutStylingBanner from "@/media/Images/HairStyling/hairStylingBanner.jpg"
const HairCutStylingHead = () => {
  return (
    <div className="subServiceHead-container">
      <div className="subServiceHead-content">
        <Image
          src={hairCutStylingBanner}
          alt="hairCut Styling Banner"
        />
      </div>
      <div className="subServiceHead-content">
        <h6>HAIR SERVICE</h6>
        <h2>Haircut And Styling</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis
          sunt id pariatur vero ab minus itaque doloremque quibusdam, libero
          optio perspiciatis corporis. Voluptatum id vitae consequuntur enim
          optio repudiandae?
        </p>
      </div>
    </div>
  );
};

export default HairCutStylingHead;
