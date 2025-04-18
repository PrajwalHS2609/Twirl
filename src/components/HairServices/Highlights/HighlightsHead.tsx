import React from 'react'
import highlightBanner from "@/media/Images/HairHighlight/highlightHead.jpg";
import "@/components/Style/style.css";
import Image from 'next/image';
const HighlightsHead = () => {
  return (
    <div className="subServiceHead-container">
    <div className="subServiceHead-content">
      <Image src={highlightBanner} alt="Highlight Banner" />
    </div>
    <div className="subServiceHead-content">
      <h6>HAIR SERVICE</h6>
      <h2>Hair Highlight and Streaks </h2>
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

export default HighlightsHead
