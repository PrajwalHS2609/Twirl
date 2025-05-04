import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import ClassicPedicureHead from "@/components/NailSubServices/ClassicPedicure/ClassicPedicureHead";
import ClassicPedicureHeader from "@/components/NailSubServices/ClassicPedicure/ClassicPedicureHeader";
export const metadata = {
  title: "Classic Pedicure Salon in Mangalore | Best Pedicure Salon Near Me",
  description:
    "Classic Pedicure Salon in Mangalore offering more than just a grooming session — we offer an experience. In a city bustling with life, finding a salon that blends hygiene, professional care, relaxation, and style is essential. ",
  canonical: "https://twirlsalon.com/classic-pedicure-salon-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function ClassicPedicure() {
  return (
    <div className="main-container">
      <ClassicPedicureHeader />
      <ClassicPedicureHead />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <ClassicPedicure />
    </div>
  );
}
