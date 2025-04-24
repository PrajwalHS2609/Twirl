import HighlightsCard from "@/components/HairServices/Highlights/HighlightsCard";
import HighlightsHead from "@/components/HairServices/Highlights/HighlightsHead";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
export const metadata = {
  title: "Hair Highlights & Hair Streaks Salon in Mangalore for Men & Women",
  description: "Hair Highlights & Hair Streaks Salon in Mangalore for Men & Women. This technique enhances your natural color, creating a vibrant, sun-kissed look that’s perfect for any occasion.",
  canonical: "https://twirlsalon.com/hair-highlights-and-streaks-salon-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function HairHighlights() {
  return (
    <div className="main-container">
      <HighlightsHead />
      <HighlightsCard/>
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
    </div>
  );
}
