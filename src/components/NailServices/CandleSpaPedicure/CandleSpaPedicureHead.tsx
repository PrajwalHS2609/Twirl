import Image from "next/image";
import React from "react";
import candlePedicureBanner from "@/media/Images/NailService/Banner/candlePedicureBanner.jpg";
import "@/components/Style/style.css";

const CandleSpaPedicureHead = () => {
  return (
    <div className="hairServiceHead-container">
      <div className="hairServiceHead-content">
        <Image src={candlePedicureBanner} alt="Candle Pedicure Banner" />
      </div>
      <div className="hairServiceHead-content">
        <h6>NAIL SERVICE</h6>
        <h2>Candle Spa Pedicure</h2>
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

export default CandleSpaPedicureHead;
