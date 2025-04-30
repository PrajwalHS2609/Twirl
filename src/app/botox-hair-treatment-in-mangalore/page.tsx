import BotoxHairTreatmentContent from "@/components/HairTreatments/BotoxHairTreatment/BotoxHairTreatmentContent";
import BotoxHairTreatmentHead from "@/components/HairTreatments/BotoxHairTreatment/BotoxHairTreatmentHead";
import BotoxHairTreatmentHeader from "@/components/HairTreatments/BotoxHairTreatment/BotoxHairTreatmentHeader";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";

export const metadata = {
  title: "Botox Hair Treatment in Mangalore | Hair Treatments Near Me",
  description:
    "Botox Hair Treatment in Mangalore has become one of the most sought-after hair care solutions for individuals seeking a smooth, frizz-free, and healthy hair transformation.",
  canonical: "https://twirlsalon.com/botox-hair-treatment-in-mangalore",
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
      <BotoxHairTreatmentHeader />
      <BotoxHairTreatmentHead />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <BotoxHairTreatmentContent />
    </div>
  );
}
