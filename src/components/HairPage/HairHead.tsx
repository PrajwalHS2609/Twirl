import React from "react";
import "./HairPage.css";
import Image from "next/image";
import hairServiceBanner from "@/media/Images/HairService/hairServiceBanner.jpg";
const HairHead = () => {
  return (
    <div className="hairHead-container">
      <Image src={hairServiceBanner} alt="hairServiceBanner" />
      <div className="hairHead-content">
        <h2>Hair Services</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          eligendi est fugit distinctio repellendus dolorem dolorum? Tempore
          nobis ipsam, molestias harum ullam incidunt sapiente rem soluta
          maiores, dignissimos aperiam similique.
        </p>
      </div>
    </div>
  );
};

export default HairHead;
