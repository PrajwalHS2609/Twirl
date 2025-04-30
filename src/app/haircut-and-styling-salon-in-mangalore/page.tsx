import HairCutStylingCard from "@/components/HairServices/HairCutStyling/HairCutStylingCard";
import HairCutStylingContent from "@/components/HairServices/HairCutStyling/HairCutStylingContent";
import HairCutStylingHead from "@/components/HairServices/HairCutStyling/HairCutStylingHead";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
export const metadata = {
  title: "Hair Cut & Hair Styling in Mangalore for Men & Women",
  description: "Hair Cut & Hair Styling Salon in Mangalore for Men & Women. From precision haircuts to vibrant coloring, rejuvenating hair spas, and expert smoothening treatments.",
  canonical: "https://twirlsalon.com/haircut-and-styling-salon-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function HaircutStyling() {
  return (
    <div className="main-container">
      <HairCutStylingHead />
      <HairCutStylingCard />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <HairCutStylingContent/>
    </div>
  );
}
