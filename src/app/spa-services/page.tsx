import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import SpaServicesCard from "@/components/SpaServices/SpaServicesCard";
import SpaServicesHead from "@/components/SpaServices/SpaServicesHead";

export default function SpaService() {
  return (
    <div className="main-container">
      <SpaServicesHead />
      <SpaServicesCard />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
    </div>
  );
}
