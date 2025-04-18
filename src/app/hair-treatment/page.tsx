import HairTreatmentCard from "@/components/HairServices/HairTreatment/HairTreatmentCard";
import HairTreatmentHead from "@/components/HairServices/HairTreatment/HairTreatmentHead";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";

export default function HairTreatment() {
  return (
    <div className="main-container">
      <HairTreatmentHead />
      <HairTreatmentCard />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
    </div>
  );
}
