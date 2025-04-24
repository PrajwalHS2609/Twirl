import Image from "next/image";
import React from "react";
import mustacheBanner from "@/media/Images/Mustache/mustacheBanner.jpg";
import "@/components/Style/style.css";

const MustacheHead = () => {
  return (
    <div className="subServiceHead-container">
      <div className="subServiceHead-content">
        <Image src={mustacheBanner} alt="Mustache Banner" />
      </div>
      <div className="subServiceHead-content">
        <h6>HAIR SERVICE</h6>
        <h2>Mustache</h2>
        <p>
          A mustache is facial hair that grows on the upper lip, offering a bold
          and distinct look. It can be groomed in various styles, from classic
          to trendy, adding character and personality to your
          overall appearance.
        </p>
      </div>
    </div>
  );
};

export default MustacheHead;
