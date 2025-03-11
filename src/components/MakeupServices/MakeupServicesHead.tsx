import React from "react";
import makeupBanner from "@/media/Images/MakeupServices/makeupBanner.jpg";
import Image from "next/image";
import "@/components/Style/style.css";

const MakeupServicesHead = () => {
  return  <div className="subHead-container">
  <Image src={makeupBanner} alt="makeup banner" />
  <div className="subHead-content">
    <h2>Makeup Service</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
      eligendi est fugit distinctio repellendus dolorem dolorum? Tempore
      nobis ipsam, molestias harum ullam incidunt sapiente rem soluta
      maiores, dignissimos aperiam similique.
    </p>
  </div>
</div>;
};

export default MakeupServicesHead;
