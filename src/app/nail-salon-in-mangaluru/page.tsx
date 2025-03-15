import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import NailContent from "@/components/NailPage/NailContent";
import NailsServices from "@/components/NailPage/NailsServices";
import NailsServicesHead from "@/components/NailPage/NailsServicesHead";
import React from "react";
export const metadata = {
  title: "Nail Salon in Mangaluru | Manicure & Pedicure Treatment in Mangaluru",
  description:
    "Nail Salon in Mangaluru. Twirl Salon is your go-to destination for all things nails, providing top-notch manicures, pedicures, nail extensions, and nail art. ",
  canonical: "https://twirlsalon.com/nail-salon-in-mangaluru",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function NailServices() {
  return (
    <div className="main-container">
      <NailsServicesHead />
      <NailsServices />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <NailContent />
    </div>
  );
}
