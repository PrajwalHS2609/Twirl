import Image from 'next/image'
import React from 'react'
import BeautyServiceBanner from "@/media/Images/BeautyEssentialsService/beautyServiceBanner.jpg"
import "@/components/Style/style.css"

const BeautyEssentialServicesHead = () => {
  return (
    <div className="subHead-container">
      <Image src={BeautyServiceBanner} alt="facialServiceBanner" />
      <div className="subHead-content">
        <h2>Waxing Services</h2>
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

export default BeautyEssentialServicesHead
