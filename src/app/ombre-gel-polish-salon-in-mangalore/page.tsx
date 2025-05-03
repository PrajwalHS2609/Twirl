import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import OmbreGelPolishContent from "@/components/NailSubServices/OmbreGelPolish/OmbreGelPolishContent";
import OmbreGelPolishHead from "@/components/NailSubServices/OmbreGelPolish/OmbreGelPolishHead";
import OmbreGelPolishHeader from "@/components/NailSubServices/OmbreGelPolish/OmbreGelPolishHeader";
export const metadata = {
  title:
    "Ombre Gel Polish Salon in Mangalore| Best Ombre Nail Polish Salon Near Me",
  description:
    "Ombre Gel Polish Salon in Mangalore. From subtle nude gradients to bold color fades, we bring your nail dreams to life with unmatched precision and creativity.",
  canonical: "https://twirlsalon.com/ombre-gel-polish-salon-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function OmbreGelPolish() {
  return (
    <div className="main-container">
      <OmbreGelPolishHeader />
      <OmbreGelPolishHead />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <OmbreGelPolishContent />
    </div>
  );
}
