import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import HomeYt from "@/components/HomePage/HomeYt/HomeYt";
import Reviews from "@/components/Reviews/Reviews";
import ServiceCard from "@/components/Services/ServiceCard/ServiceCard";
import ServiceHeader from "@/components/Services/ServiceHeader/ServiceHeader";

export default function Services() {
  return (
    <div className="main-container">
      <ServiceHeader />
      <ServiceCard />
      <HomeTreatments />
      <HomeYt />
      <Reviews />
      <HomeInspire />
    </div>
  );
}
