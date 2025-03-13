import React from 'react'
import "@/components/Style/style.css";
import hairTreatmentBanner from "@/media/Images/HairTreatment/hairTreatmentBanner.jpg"
import Image from 'next/image';
import "@/components/Style/style.css";

const HairTreatmentHead = () => {
  return (
<div className="hairServiceHead-container">
    <div className="hairServiceHead-content">
      <Image
        src={hairTreatmentBanner}
        alt="hair Treatment Banner"
      />
    </div>
    <div className="hairServiceHead-content">
      <h6>HAIR SERVICE</h6>
      <h2>Hair Treatment</h2>
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

export default HairTreatmentHead
