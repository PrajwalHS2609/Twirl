import React from "react";
import ombreGelBanner from "@/media/Images/NailService/Banner/ombreNailBanner.jpg";
import "@/components/Style/style.css";
import Image from "next/image";
const OmbreGelPolishHeader = () => {
  return (
    <div className="subServiceHead-container">
      <div className="subServiceHead-content">
        <Image src={ombreGelBanner} alt="Ombre Gel Banner" />
      </div>
      <div className="subServiceHead-content">
        <h6>NAIL SERVICE</h6>
        <h2>Ombre Gel Polish</h2>
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

export default OmbreGelPolishHeader;
