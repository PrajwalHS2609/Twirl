import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import HomeYt from "@/components/HomePage/HomeYt/HomeYt";
import OrganicMaincureContent from "@/components/NailSubServices/OrganicMaincure/OrganicMaincureContent";
import OrganicMaincureHead from "@/components/NailSubServices/OrganicMaincure/OrganicMaincureHead";
import OrganicMaincureHeader from "@/components/NailSubServices/OrganicMaincure/OrganicMaincureHeader";
import Reviews from "@/components/Reviews/Reviews";
export const metadata = {
  title: "Organic Manicure Salon in Mangalore | Best Manicure Salon Near Me",
  description:
    "Organic Manicure Salon in Mangalore. Our mission is to offer a cleaner, healthier, and more luxurious nail care experience by using only the finest organic products that are safe for your skin, nails, and the environment. ",
  canonical: "https://twirlsalon.com/organic-manicure-salon-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function OrganicMaincure() {
  return (
    <div className="main-container">
      <OrganicMaincureHeader />
      <OrganicMaincureHead />
      <HomeTreatments />
      <HomeYt />
      <Reviews />
      <HomeInspire />
      <OrganicMaincureContent />
    </div>
  );
}
