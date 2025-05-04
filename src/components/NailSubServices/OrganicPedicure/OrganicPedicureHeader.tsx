import Image from "next/image";
import React from "react";
import "@/components/Style/style.css";
import orgnicPedicure from "@/media/Images/NailService/Organic Pedicure.png";

const OrganicPedicureHeader = () => {
  return (
    <div className="subServiceHead-container">
      <div className="subServiceHead-content">
        <Image src={orgnicPedicure} alt="Orgnic Pedicure" />
      </div>
      <div className="subServiceHead-content">
        <h6>NAIL SERVICE</h6>
        <h2>Organic Pedicure Salon in Mangalore</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          itaque, maiores similique necessitatibus deleniti vero officia
          delectus suscipit, laboriosam porro error sapiente? Quidem, dolorum
          facere ab aspernatur at ea qui!
        </p>
      </div>
    </div>
  );
};

export default OrganicPedicureHeader;
