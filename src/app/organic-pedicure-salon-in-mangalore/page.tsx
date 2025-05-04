import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import OrganicMaincureContent from "@/components/NailSubServices/OrganicMaincure/OrganicMaincureContent";
import OrganicMaincureHead from "@/components/NailSubServices/OrganicMaincure/OrganicMaincureHead";
import OrganicPedicureHeader from "@/components/NailSubServices/OrganicPedicure/OrganicPedicureHeader";
export const metadata = {
  title: "Organic Pedicure Salon in Mangalore | Best Pedicure Salon Near Me",
  description:
    "Organic Pedicure Salon in Mangalore. Twirl Salon offers a unique approach to foot care by combining organic products with expert techniques in a calming, hygienic environment.",
  canonical: "https://twirlsalon.com/organic-pedicure-salon-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function OrganicPedicure() {
  return (
    <div className="main-container">
      <OrganicPedicureHeader />
      <OrganicMaincureHead />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <OrganicMaincureContent />
    </div>
  );
}
