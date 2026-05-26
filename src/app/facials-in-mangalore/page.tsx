import FacialContent from "@/components/FacialServices/FacialContent";
import FacialServicesCard from "@/components/FacialServices/FacialServicesCard";
import FacialServicesHead from "@/components/FacialServices/FacialServicesHead";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import HomeYt from "@/components/HomePage/HomeYt/HomeYt";
import Reviews from "@/components/Reviews/Reviews";
import "@/components/Style/style.css";
export const metadata = {
  title: "Facials in Mangalore | Facial Treatment in Mangalore",
  description: "Facials in Mangalore. Twirl Salon is your go-to destination for all things skincare, providing top-notch facials that cater to different skin types and concerns.",
  canonical: "https://twirlsalon.com/facials-in-mangalore",
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
      <HomeYt />
      <Reviews /> 
      <HomeInspire />
      <FacialContent />
    </div>
  );
}
