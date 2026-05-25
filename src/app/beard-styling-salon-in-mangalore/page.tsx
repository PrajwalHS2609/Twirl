import BeardCard from "@/components/HairServices/Beard/BeardCard";
import BeardContent from "@/components/HairServices/Beard/BeardContent";
import BeardHead from "@/components/HairServices/Beard/BeardHead";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import HomeYt from "@/components/HomePage/HomeYt/HomeYt";
import Reviews from "@/components/Reviews/Reviews";
export const metadata = {
  title: "Beard Styling Salon in Mangalore | Best Beard Salon near me",
  description:
    "Beard Styling Salon in Mangalore. Whether it's trimming, shaping, or adding texture, professional Beard styling enhances your features and complements your overall style.",
  canonical: "https://twirlsalon.com/beard-styling-salon-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function Beard() {
  return (
    <div className="main-container">
      <BeardHead />
      <BeardCard />
      <HomeTreatments />
      <HomeInterior />
      <HomeYt />
      <Reviews />
      <HomeInspire />
      <BeardContent />
    </div>
  );
}
