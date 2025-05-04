import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import ColorChangeHeader from "@/components/NailSubServices/ColorChange/ColorChangeHeader";
import ColorChangeHead from "@/components/NailSubServices/ColorChange/ColorChangeHead";
import ColorChangeContent from "@/components/NailSubServices/ColorChange/ColorChangeContent";
export const metadata = {
  title: "Nail Colour Change Salon in Mangalore | Best Nail Salon Near Me",
  description:
    "Nail Colour Change Salon in Mangalore, offering a wide range of nail polish shades, techniques, and trends to suit every mood, season, and personality. environment.",
  canonical: "https://twirlsalon.com/nail-colour-change-salon-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function NailColorChange() {
  return (
    <div className="main-container">
      <ColorChangeHeader />
      <ColorChangeHead />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <ColorChangeContent />
    </div>
  );
}
