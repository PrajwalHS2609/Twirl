"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import twirlLogo from "@/media/Images/logo.jpg";
import "./Whatsapp.css";
const Whatsapp = () => {
  return (
    <div className="whatsAppContainer">
      <FloatingWhatsApp
        phoneNumber="919972272700"
        accountName="TWIRL"
        avatar={twirlLogo.src}
        statusMessage="Typically replies within 5 min"
        chatMessage="✨ Hello from Twirl Salon! ✨ Ready to refresh your look? 💇‍♀💅 From stunning hair makeovers to luxurious manicures, pedicures, and skincare, we’ve got you covered! Book your appointment today and let us pamper you to perfection.💖
📍 Call or WhatsApp us at +91 9972272700 to book now!" 
        placeholder="Type a message..."
      />
    </div>
  );
};

export default Whatsapp;
