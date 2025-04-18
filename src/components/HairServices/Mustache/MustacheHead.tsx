import Image from 'next/image'
import React from 'react'
import mustacheBanner from "@/media/Images/Mustache/mustacheBanner.jpg"
import "@/components/Style/style.css";

const MustacheHead = () => {
  return (
<div className="subServiceHead-container">
    <div className="subServiceHead-content">
      <Image
        src={mustacheBanner}
        alt="Mustache Banner"
      />
    </div>
    <div className="subServiceHead-content">
      <h6>HAIR SERVICE</h6>
      <h2>Mustache</h2>
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

export default MustacheHead
