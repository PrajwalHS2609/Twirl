import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import ServiceCard from "@/components/Services/ServiceCard/ServiceCard";
import ServiceHeader from "@/components/Services/ServiceHeader/ServiceHeader";

export default function Services() {
  return (
    <div className="main-container">
      <ServiceHeader />
      <ServiceCard />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
    </div>
  );
}
