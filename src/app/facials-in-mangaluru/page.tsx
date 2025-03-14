import FacialServicesCard from "@/components/FacialServices/FacialServicesCard";
import FacialServicesHead from "@/components/FacialServices/FacialServicesHead";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import "@/components/Style/style.css";
export default function FacialService() {
  return (
    <div className="main-container">
      <FacialServicesHead />
      <FacialServicesCard />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
    </div>
  );
}
