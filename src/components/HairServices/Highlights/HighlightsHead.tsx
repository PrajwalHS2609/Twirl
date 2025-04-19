import React from "react";
import highlightBanner from "@/media/Images/HairHighlight/highlightHead.jpg";
import "@/components/Style/style.css";
import Image from "next/image";
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
          Add depth and dimension to your hair with subtle highlights and
          streaks. This technique enhances your natural color, creating a
          vibrant, sun-kissed look that’s perfect for any occasion. Enjoy a
          fresh, modern style with a touch of flair.
        </p>
      </div>
    </div>
  );
};

export default HighlightsHead;
