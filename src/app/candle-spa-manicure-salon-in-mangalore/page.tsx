import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import CandleSpaManicureContent from "@/components/NailSubServices/CandleSpaManicure/CandleSpaManicureContent";
import CandleSpaManicureHead from "@/components/NailSubServices/CandleSpaManicure/CandleSpaManicureHead";
import CandleSpaManicureHeader from "@/components/NailSubServices/CandleSpaManicure/CandleSpaManicureHeader";

export const metadata = {
  title: "Candle Spa Manicure Salon in Mangalore | Best Manicure Salon Near Me",
  description:
    "Candle Spa Manicure Salon in Mangalore. Our mission is to offer a cleaner, healthier, and more luxurious nail care experience by using only the finest organic products that are safe for your skin, nails, and the environment.",
  canonical: "https://twirlsalon.com/candle-spa-manicure-salon-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function CandleMaincure() {
  return (
    <div className="main-container">
      <CandleSpaManicureHeader />
      <CandleSpaManicureHead />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <CandleSpaManicureContent />
    </div>
  );
}
