import HighlightsCard from "@/components/HairServices/Highlights/HighlightsCard";
import HighlightsHead from "@/components/HairServices/Highlights/HighlightsHead";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";

export default function HairHighlights() {
  return (
    <div className="main-container">
      <HighlightsHead />
      <HighlightsCard/>
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
    </div>
  );
}
