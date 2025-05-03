import Image from "next/image";
import React from "react";
import classicManicure from "@/media/Images/NailService/Classic Manicure.png";
import "@/components/Style/style.css";

const ClassicMaincureHeader = () => {
  return (
    <div className="subServiceHead-container">
      <div className="subServiceHead-content">
        <Image src={classicManicure} alt="Classic Manicure" />
      </div>
      <div className="subServiceHead-content">
        <h6>NAIL SERVICE</h6>
        <h2>Classic Manicure Salon in Mangalore</h2>
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

export default ClassicMaincureHeader;
