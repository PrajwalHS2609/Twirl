import Image from 'next/image'
import React from 'react'
import spaServiceBanner from "@/media/Images/SpaService/spaServiceBanner.jpg"
import "@/components/Style/style.css"

const SpaServicesHead = () => {
  return (
    <div className="subHead-container">
    <Image src={spaServiceBanner} alt="spaServiceBanner" />
    <div className="subHead-content">
      <h2>Spa Services</h2>
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

export default SpaServicesHead
