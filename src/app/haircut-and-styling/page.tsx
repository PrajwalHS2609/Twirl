import HairCutStylingCard from "@/components/HairServices/HairCutStyling/HairCutStylingCard";
import HairCutStylingHead from "@/components/HairServices/HairCutStyling/HairCutStylingHead";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";

export default function HaircutStyling() {
  return (
    <div className="main-container">
      <HairCutStylingHead />
      <HairCutStylingCard />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
    </div>
  );
}
