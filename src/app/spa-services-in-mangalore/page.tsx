import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import SpaContent from "@/components/SpaServices/SpaContent";
import SpaServicesCard from "@/components/SpaServices/SpaServicesCard";
import SpaServicesHead from "@/components/SpaServices/SpaServicesHead";
export const metadata = {
  title: "Luxury Spa Services in Mangalore| Best Body Spa Near Me",
  description:
    "Luxury Spa Services in Mangalore. If you're looking to unwind, relax, and indulge in a moment of calm, a visit to a spa in Mangalore might be exactly what you need.",
  canonical: "https://twirlsalon.com/spa-services-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function SpaService() {
  return (
    <div className="main-container">
      <SpaServicesHead />
      <SpaServicesCard />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <SpaContent />
    </div>
  );
}
