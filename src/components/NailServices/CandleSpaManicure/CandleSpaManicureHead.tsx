import Image from 'next/image'
import React from 'react'
import candleManicureBanner from "@/media/Images/NailService/Candle Spa Manicure.png"
import "@/components/Style/style.css";

const CandleSpaManicureHead = () => {
  return (
<div className="hairServiceHead-container">
    <div className="hairServiceHead-content">
      <Image
        src={candleManicureBanner}
        alt="Candle Manicure Banner"
      />
    </div>
    <div className="hairServiceHead-content">
      <h6>NAIL SERVICE</h6>
      <h2>Candle Spa Manicure</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nobis
        sunt id pariatur vero ab minus itaque doloremque quibusdam, libero
        optio perspiciatis corporis. Voluptatum id vitae consequuntur enim
        optio repudiandae?
      </p>
    </div>
  </div>
  )
}

export default CandleSpaManicureHead
