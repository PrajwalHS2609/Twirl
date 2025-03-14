import Image from "next/image";
import React from "react";
import beardBanner from "@/media/Images/Beard/beardBanner.jpg";
import "@/components/Style/style.css";

const BeardHead = () => {
  return (
    <div className="hairServiceHead-container">
      <div className="hairServiceHead-content">
        <Image src={beardBanner} alt="Beard Banner" />
      </div>
      <div className="hairServiceHead-content">
        <h6>HAIR SERVICE</h6>
        <h2>Beard Styling</h2>
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

export default BeardHead;
