import HairHead from "@/components/HairPage/HairHead";
import HairServices from "@/components/HairPage/HairServices";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import React from "react";

export default function HairService() {
  return (
    <div className="main-container">
      <HairHead />
      <HairServices />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
    </div>
  );
}
