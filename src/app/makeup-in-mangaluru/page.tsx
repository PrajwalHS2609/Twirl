import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import MakeupServicesCard from "@/components/MakeupServices/MakeupServicesCard";
import MakeupServicesHead from "@/components/MakeupServices/MakeupServicesHead";

export default function Makeup() {
  return (
    <div className="main-container">
      <MakeupServicesHead />
      <MakeupServicesCard />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
    </div>
  );
}
