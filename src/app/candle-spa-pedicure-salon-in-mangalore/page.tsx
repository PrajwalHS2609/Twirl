import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import CandleSpaPedicureContent from "@/components/NailSubServices/CandleSpaPedicure/CandleSpaPedicureContent";
import CandleSpaPedicureHead from "@/components/NailSubServices/CandleSpaPedicure/CandleSpaPedicureHead";
import CandleSpaPedicureHeader from "@/components/NailSubServices/CandleSpaPedicure/CandleSpaPedicureHeader";
export const metadata = {
  title: "Classic Manicure Salon in Mangalore | Best Manicure Salon Near Me",
  description:
    "Classic Manicure Salon in Mangalore. As trends evolve, so do expectations, and clients are no longer satisfied with just a simple nail trim and polish.",
  canonical: "https://twirlsalon.com/candle-spa-pedicure-salon-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function CandlePedicure() {
  return (
    <div className="main-container">
      <CandleSpaPedicureHeader />
      <CandleSpaPedicureHead />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <CandleSpaPedicureContent />
    </div>
  );
}
