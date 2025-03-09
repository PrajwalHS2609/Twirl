import BeautyEssentialServicesCard from "@/components/BeautyEssentialServices/BeautyEssentialServicesCard";
import BeautyEssentialServicesHead from "@/components/BeautyEssentialServices/BeautyEssentialServicesHead";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";

export default function BeautyEssentials() {
  return (
    <div className="main-container">
      <BeautyEssentialServicesHead />
      <BeautyEssentialServicesCard />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
    </div>
  );
}
