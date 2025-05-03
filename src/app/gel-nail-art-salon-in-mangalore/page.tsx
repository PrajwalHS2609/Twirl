import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import GelNailArtContent from "@/components/NailSubServices/GelNailArt/GelNailArtContent";
import GelNailArtHead from "@/components/NailSubServices/GelNailArt/GelNailArtHead";
import GelNailArtHeader from "@/components/NailSubServices/GelNailArt/GelNailArtHeader";
export const metadata = {
  title: "Classic Manicure Salon in Mangalore | Best Manicure Salon Near Me",
  description:
    "Classic Manicure Salon in Mangalore. As trends evolve, so do expectations, and clients are no longer satisfied with just a simple nail trim and polish.",
  canonical: "https://twirlsalon.com/classic-manicure-salon-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function ClassicMaincure() {
  return (
    <div className="main-container">
      <GelNailArtHeader />
      <GelNailArtHead />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <GelNailArtContent />
    </div>
  );
}
