import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import NailGelerationContent from "@/components/NailSubServices/NailGeleration/NailGelerationContent";
import NailGelerationHead from "@/components/NailSubServices/NailGeleration/NailGelerationHead";
import NailGelerationHeader from "@/components/NailSubServices/NailGeleration/NailGelerationHeader";
export const metadata = {
  title: "Nail Geleration Salon in Mangalore | Best Nail Salon Near Me",
  description:
    "Nail Geleration Salon in Mangalore, is a revolutionary gel polish treatment designed to provide flawless, glossy nails that remain intact for weeks.",
  canonical: "https://twirlsalon.com/nail-geleration-salon-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function NailGeleration() {
  return (
    <div className="main-container">
      <NailGelerationHeader />
      <NailGelerationHead />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <NailGelerationContent />
    </div>
  );
}
