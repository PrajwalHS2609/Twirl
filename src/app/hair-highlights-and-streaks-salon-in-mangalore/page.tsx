import HighlightsCard from "@/components/HairServices/Highlights/HighlightsCard";
import HighlightsContent from "@/components/HairServices/Highlights/HighlightsContent";
import HighlightsHead from "@/components/HairServices/Highlights/HighlightsHead";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import HomeYt from "@/components/HomePage/HomeYt/HomeYt";
import Reviews from "@/components/Reviews/Reviews";
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
      <HomeYt />
      <Reviews />      
      <HomeInspire />
      <HighlightsContent/>
    </div>
  );
}
