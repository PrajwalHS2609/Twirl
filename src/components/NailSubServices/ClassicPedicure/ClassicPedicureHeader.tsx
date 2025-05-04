import React from 'react'
import "@/components/Style/style.css";
import classicPedicure from "@/media/Images/NailService/Classic Pedicure.png";
import Image from 'next/image';

const ClassicPedicureHeader = () => {
  return (
    <div className="subServiceHead-container">
    <div className="subServiceHead-content">
      <Image src={classicPedicure} alt="Classic Pedicure" />
    </div>
    <div className="subServiceHead-content">
      <h6>NAIL SERVICE</h6>
      <h2>Classic Pedicure Salon in Mangalore</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        itaque, maiores similique necessitatibus deleniti vero officia
        delectus suscipit, laboriosam porro error sapiente? Quidem, dolorum
        facere ab aspernatur at ea qui!
      </p>
    </div>
  </div>
  )
}

export default ClassicPedicureHeader
