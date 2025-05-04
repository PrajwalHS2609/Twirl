import Image from 'next/image'
import React from 'react'
import "@/components/Style/style.css";
import frenchGelerationBanner from "@/media/Images/NailService/French Geleration.png";

const FrenchGelerationHeader = () => {
  return (
    <div className="subServiceHead-container">
      <div className="subServiceHead-content">
        <Image src={frenchGelerationBanner} alt="french Geleration Banner" />
      </div>
      <div className="subServiceHead-content">
        <h6>NAIL SERVICE</h6>
        <h2>French Geleration Salon in Mangalore</h2>
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

export default FrenchGelerationHeader
