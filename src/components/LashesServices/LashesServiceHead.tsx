import React from 'react'
import "@/components/Style/style.css";
import Image from 'next/image';
import lashesServiceBanner from "@/media/Images/LashesService/lashesServiceHead.jpg"

const LashesServiceHead = () => {
  return (
    <div className="subHead-container">
      <Image src={lashesServiceBanner} alt="lashes Service Banner" />
      <div className="subHead-content">
        <h2>Eye Lashes Service</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          eligendi est fugit distinctio repellendus dolorem dolorum? Tempore
          nobis ipsam, molestias harum ullam incidunt sapiente rem soluta
          maiores, dignissimos aperiam similique.
        </p>
      </div>
    </div>
  )
}

export default LashesServiceHead
