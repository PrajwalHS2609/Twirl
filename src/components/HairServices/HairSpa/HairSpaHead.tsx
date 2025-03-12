import Image from 'next/image'
import React from 'react'
import hairSpaBanner from "@/media/Images/HairSpa/hairSpaBanner.jpg"
import "@/components/Style/style.css";

const HairSpaHead = () => {
  return (
    <div className="hairServiceHead-container">
    <div className="hairServiceHead-content">
      <Image
        src={hairSpaBanner}
        alt="hairSpa Banner"
      />
    </div>
    <div className="hairServiceHead-content">
      <h6>HAIR SERVICE</h6>
      <h2>Hair Spa</h2>
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

export default HairSpaHead
