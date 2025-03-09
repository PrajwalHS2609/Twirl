import Image from "next/image";
import React from "react";
import nailServiceBanner from "@/media/Images/NailService/nailServiceBanner.jpg";
import "@/components/Style/style.css";
const NailsServicesHead = () => {
  return (
    <div className="subHead-container">
      <Image src={nailServiceBanner} alt="nailServiceBanner" />
      <div className="subHead-content">
        <h2>Nail Services</h2>
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

export default NailsServicesHead;
