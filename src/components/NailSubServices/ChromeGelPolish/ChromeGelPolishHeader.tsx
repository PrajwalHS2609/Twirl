import Image from "next/image";
import React from "react";
import chromeGelBanner from "@/media/Images/NailService/Banner/chromeGelBanner.jpg";
import "@/components/Style/style.css";

const ChromeGelPolishHeader = () => {
  return (
    <div className="subServiceHead-container">
      <div className="subServiceHead-content">
        <Image src={chromeGelBanner} alt="Chrome Gel Banner" />
      </div>
      <div className="subServiceHead-content">
        <h6>NAIL SERVICE</h6>
        <h2>Chrome Gel Polish Salon in Mangalore</h2>
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

export default ChromeGelPolishHeader;
