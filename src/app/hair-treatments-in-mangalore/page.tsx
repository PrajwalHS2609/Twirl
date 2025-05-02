import HairTreatmentCard from "@/components/HairServices/HairTreatment/HairTreatmentCard";
import HairTreatmentContent from "@/components/HairServices/HairTreatment/HairTreatmentContent";
import HairTreatmentHead from "@/components/HairServices/HairTreatment/HairTreatmentHead";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
export const metadata = {
  title:
    "Hair Treatments Salon in Mangalore for Men & Women | Hair Salon near me",
  description:
    "Hair Treatments Salon in Mangalore for Men & Women. It helps address issues like dryness, damage, frizz, and split ends, leaving your hair healthier, smoother, and more manageable.",
  canonical: "https://twirlsalon.com/hair-treatments-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function HairTreatment() {
  return (
    <div className="main-container">
      <HairTreatmentHead />
      <HairTreatmentCard />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <HairTreatmentContent/>
    </div>
  );
}
