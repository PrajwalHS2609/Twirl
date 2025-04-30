import BalayageHairHighlightsContent from "@/components/HairTreatments/BalayageHairHighlights/BalayageHairHighlightsContent";
import BalayageHairHighlightsHead from "@/components/HairTreatments/BalayageHairHighlights/BalayageHairHighlightsHead";
import BalayageHairHighlightsHeader from "@/components/HairTreatments/BalayageHairHighlights/BalayageHairHighlightsHeder";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";

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
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <BalayageHairHighlightsContent />
    </div>
  );
}
