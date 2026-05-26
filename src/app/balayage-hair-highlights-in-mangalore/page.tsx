import BalayageHairHighlightsContent from "@/components/HairTreatments/BalayageHairHighlights/BalayageHairHighlightsContent";
import BalayageHairHighlightsHead from "@/components/HairTreatments/BalayageHairHighlights/BalayageHairHighlightsHead";
import BalayageHairHighlightsHeader from "@/components/HairTreatments/BalayageHairHighlights/BalayageHairHighlightsHeader";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import HomeYt from "@/components/HomePage/HomeYt/HomeYt";
import Reviews from "@/components/Reviews/Reviews";

export const metadata = {
  title:
    "Balayage Hair Highlights in Mangalore | Balayage Hair Highlights Near Me",
  description:
    "Balayage Hair Highlights in Mangalore have become one of the most sought-after hair coloring trends for individuals looking to enhance their style with a natural, sun-kissed effect. ",
  canonical: "https://twirlsalon.com/balayage-hair-highlights-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function Makeup() {
  return (
    <div className="main-container">
      <BalayageHairHighlightsHeader />
      <BalayageHairHighlightsHead />
      <HomeTreatments />
      <HomeYt />
      <Reviews />
      <HomeInspire />
      <BalayageHairHighlightsContent />
    </div>
  );
}
