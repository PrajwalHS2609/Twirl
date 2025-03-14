import Image from 'next/image'
import React from 'react'
import "@/components/Style/style.css";
import gelNailArtBanner from "@/media/Images/NailService/banner/gelNailBanner.jpg";


const GelNailArtHead = () => {
  return (
    <div className="hairServiceHead-container">
    <div className="hairServiceHead-content">
      <Image src={gelNailArtBanner} alt="Gel Nail Art Banner" />
    </div>
    <div className="hairServiceHead-content">
      <h6>NAIL SERVICE</h6>
      <h2>Gel Nail Art</h2>
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

export default GelNailArtHead
