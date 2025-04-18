import React from "react";
import "@/components/Style/style.css";
import cutAndFileBanner from "@/media/Images/NailService/Banner/cutAndFileBanner.jpg";
import Image from "next/image";

const CutAndFileHead = () => {
  return (
    <div className="subServiceHead-container">
      <div className="subServiceHead-content">
        <Image src={cutAndFileBanner} alt="Ombre Gel Banner" />
      </div>
      <div className="subServiceHead-content">
        <h6>NAIL SERVICE</h6>
        <h2>Cut And File </h2>
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

export default CutAndFileHead;
