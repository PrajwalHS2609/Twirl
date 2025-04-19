import BeardCard from "@/components/HairServices/Beard/BeardCard";
import BeardHead from "@/components/HairServices/Beard/BeardHead";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";

export default function Beard() {
  return (
    <div className="main-container">
      <BeardHead />
      <BeardCard/>
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
    </div>
  );
}
