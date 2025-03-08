import Image from 'next/image'
import React from 'react'
import facialServiceBanner from "@/media/Images/FacialService/facialServiceBanner.jpg"
import "@/components/Style/style.css"
const FacialServicesHead = () => {
  return (
    <div className="subHead-container">
      <Image src={facialServiceBanner} alt="facialServiceBanner" />
      <div className="subHead-content">
        <h2>Facial Services</h2>
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

export default FacialServicesHead
