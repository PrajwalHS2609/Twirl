import AboutUsHeader from "@/components/AboutUs/AboutUsHeader";
import AboutUsMain from "@/components/AboutUs/AboutUsMain";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
export const metadata = {
  title: "Twirl Salon in Mangaluru – About Us",
  description:
    "Twirl Salon in Mangaluru. Our expert stylists and therapists bring elegance, precision, and indulgence to every service—be it a chic haircut, rejuvenating facial, or luxurious spa treatment.",
  canonical: "https://twirlsalon.com/about-us",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function AboutUs() {
  return (
    <div className="main-container">
      <AboutUsHeader />
      <AboutUsMain />
      <HomeInterior />
      <HomeTestimonial />
    </div>
  );
}
