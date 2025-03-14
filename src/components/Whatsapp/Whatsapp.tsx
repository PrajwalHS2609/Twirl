"use client"
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import twirlLogo from "@/media/Images/logo.jpg"
import "./Whatsapp.css"
const Whatsapp = () => {
  return (
    <div className="whatsAppContainer">
      <FloatingWhatsApp
        phoneNumber="919742232700"
        accountName="TWIRL"
        avatar={twirlLogo.src} // Optional
        statusMessage="Typically replies within 5 min" // Optional
        chatMessage="" // Optional
        placeholder="Type a message..." // Optional
      />
    </div>
  )
}

export default Whatsapp
