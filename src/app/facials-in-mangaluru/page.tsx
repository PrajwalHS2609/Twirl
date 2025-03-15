import FacialContent from "@/components/FacialServices/FacialContent";
import FacialServicesCard from "@/components/FacialServices/FacialServicesCard";
import FacialServicesHead from "@/components/FacialServices/FacialServicesHead";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import "@/components/Style/style.css";
export const metadata = {
  title: "Facials in Mangaluru | Facial Treatment in Mangaluru",
  description: "Facials in Mangaluru. Twirl Salon is your go-to destination for all things skincare, providing top-notch facials that cater to different skin types and concerns.",
  canonical: "https://twirlsalon.com/facials-in-mangaluru",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function FacialService() {
  return (
    <div className="main-container">
      <FacialServicesHead />
      <FacialServicesCard />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <FacialContent/>
    </div>
  );
}
