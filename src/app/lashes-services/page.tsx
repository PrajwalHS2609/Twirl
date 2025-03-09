import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import LashesServiceHead from "@/components/LashesServices/LashesServiceHead";
import LashesServiceCard from "./../../components/LashesServices/LashesServiceCard";

export default function Lashes() {
  return (
    <div className="main-container">
      <LashesServiceHead />
      <LashesServiceCard />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
    </div>
  );
}
