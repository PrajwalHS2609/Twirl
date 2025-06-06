import Image from 'next/image'
import React from 'react'
import "@/components/Style/style.css";
import colorChangeBanner from "@/media/Images/NailService/Banner/colorChangeBanner.jpg";

const ColorChangeHeader = () => {
  return (
    <div className="subServiceHead-container">
    <div className="subServiceHead-content">
      <Image src={colorChangeBanner} alt="Color Change Banner" />
    </div>
    <div className="subServiceHead-content">
      <h6>NAIL SERVICE</h6>
      <h2>Nail Colour Change Salon in Mangalore</h2>
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

export default ColorChangeHeader
