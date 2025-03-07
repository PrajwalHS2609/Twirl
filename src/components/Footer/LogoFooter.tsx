import React from 'react'
import "./Footer.css"
import Image from 'next/image'
import logo from "@/media/Images/logo.jpg"
const LogoFooter = () => {
  return (
    <div className='logoFooter-container'>
      <Image src={logo} alt='logo'/>
    </div>
  )
}

export default LogoFooter
