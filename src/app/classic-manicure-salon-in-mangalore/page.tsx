import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import ClassicMaincureContent from "@/components/NailSubServices/ClassicMaincure/ClassicMaincureContent";
import ClassicMaincureHead from "@/components/NailSubServices/ClassicMaincure/ClassicMaincureHead";
import ClassicMaincureHeader from "@/components/NailSubServices/ClassicMaincure/ClassicMaincureHeader";
export const metadata = {
  title: "Classic Manicure Salon in Mangalore | Best Manicure Salon Near Me",
  description:
    "Classic Manicure Salon in Mangalore. As trends evolve, so do expectations, and clients are no longer satisfied with just a simple nail trim and polish.",
  canonical: "https://twirlsalon.com/classic-manicure-salon-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function ClassicMaincure() {
  return (
    <div className="main-container">
      <ClassicMaincureHeader />
      <ClassicMaincureHead />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <ClassicMaincureContent />
    </div>
  );
}
