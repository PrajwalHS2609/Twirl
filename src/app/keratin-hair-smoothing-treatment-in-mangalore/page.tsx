
import KeratinHairTreatmentContent from "@/components/HairTreatments/KeratinHairSmoothingTreatment/KeratinHairTreatmentContent";
import KeratinHairTreatmentHead from "@/components/HairTreatments/KeratinHairSmoothingTreatment/KeratinHairTreatmentHead";
import KeratinHairSmoothingTreatment from "@/components/HairTreatments/KeratinHairSmoothingTreatment/KeratinHairTreatmentHeader";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";

export const metadata = {
  title: "Keratin Hair Smoothing Treatment in Mangalore | Hair Treatments Near Me",
  description:
    "Keratin Hair Smoothing Treatment in Mangalore is rapidly gaining popularity among individuals seeking a long-lasting solution to frizzy, unmanageable hair.",
  canonical: "https://twirlsalon.com/keratin-hair-smoothing-treatment-in-mangalore",
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
      <KeratinHairSmoothingTreatment />
      <KeratinHairTreatmentHead />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <KeratinHairTreatmentContent />
    </div>
  );
}
