import MustacheCard from "@/components/HairServices/Mustache/MustacheCard";
import MustacheHead from "@/components/HairServices/Mustache/MustacheHead";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";

export default function Mustache() {
  return (
    <div className="main-container">
      <MustacheHead />
      <MustacheCard/>
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
    </div>
  );
}
