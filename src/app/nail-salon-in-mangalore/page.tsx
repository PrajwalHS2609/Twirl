import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import HomeYt from "@/components/HomePage/HomeYt/HomeYt";
import NailContent from "@/components/NailPage/NailContent";
import NailsServices from "@/components/NailPage/NailsServices";
import NailsServicesHead from "@/components/NailPage/NailsServicesHead";
import Reviews from "@/components/Reviews/Reviews";
import React from "react";
export const metadata = {
  title: "Nail Salon in Mangalore | Manicure & Pedicure Treatment in Mangalore",
  description:
    "Nail Salon in Mangalore. Twirl Salon is your go-to destination for all things nails, providing top-notch manicures, pedicures, nail extensions, and nail art. ",
  canonical: "https://twirlsalon.com/nail-salon-in-mangalore",
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
      <HomeYt />
      <Reviews />
            <HomeInspire />
      <NailContent />
    </div>
  );
}
