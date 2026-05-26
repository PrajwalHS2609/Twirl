import HairContent from "@/components/HairPage/HairContent";
import HairHead from "@/components/HairPage/HairHead";
import HairServices from "@/components/HairPage/HairServices";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import HomeYt from "@/components/HomePage/HomeYt/HomeYt";
import Reviews from "@/components/Reviews/Reviews";
import React from "react";
export const metadata = {
  title: "Hair Salon in Mangalore | Hair Treatments in Mangalore",
  description: "Hair Salon in Mangalore. Twirl Salon is your go-to destination for all things hair, providing top-notch styling, coloring, treatments, and more. Book Now!",
  canonical: "https://twirlsalon.com/hair-salon-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function HairService() {
  return (
    <div className="main-container">
      <HairHead />
      <HairServices />
      <HomeTreatments />
      <HomeYt />
      <Reviews />      
      <HomeInspire />
      <HairContent/>
    </div>
  );
}
