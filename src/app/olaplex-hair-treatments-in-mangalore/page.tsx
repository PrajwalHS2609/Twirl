import OlaplexHairTreatmentsContent from "@/components/HairTreatments/OlaplexHairTreatments/OlaplexHairTreatmentsContent";
import OlaplexHairTreatmentsHead from "@/components/HairTreatments/OlaplexHairTreatments/OlaplexHairTreatmentsHead";
import OlaplexHairTreatmentsHeader from "@/components/HairTreatments/OlaplexHairTreatments/OlaplexHairTreatmentsHeader";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import HomeYt from "@/components/HomePage/HomeYt/HomeYt";
import Reviews from "@/components/Reviews/Reviews";

export const metadata = {
  title: "Olaplex Hair Treatments in Mangalore | Hair Treatments Near Me",
  description:
    "Olaplex Hair Treatments in Mangalore offer a reliable solution for those seeking to rejuvenate and protect their hair from further damage. Call Now! ",
  canonical: "https://twirlsalon.com/olaplex-hair-treatments-in-mangalore",
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
      <OlaplexHairTreatmentsHeader />
      <OlaplexHairTreatmentsHead />
      <HomeTreatments />
      <HomeYt />
      <Reviews />      
      <HomeInspire />
      <OlaplexHairTreatmentsContent />
    </div>
  );
}
