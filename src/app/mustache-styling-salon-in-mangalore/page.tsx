import MustacheCard from "@/components/HairServices/Mustache/MustacheCard";
import MustacheContent from "@/components/HairServices/Mustache/MustacheContent";
import MustacheHead from "@/components/HairServices/Mustache/MustacheHead";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";

export const metadata = {
  title: "Mustache Styling Salon in Mangalore | Best Mustache Salon near me",
  description:
    "Mustache Styling Salon in Mangalore. Whether it's trimming, shaping, or adding texture, professional Mustache styling enhances your features and complements your overall style.",
  canonical: "https://twirlsalon.com/mustache-styling-salon-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function Mustache() {
  return (
    <div className="main-container">
      <MustacheHead />
      <MustacheCard/>
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <MustacheContent/>
    </div>
  );
}
