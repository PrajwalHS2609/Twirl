import HomeAbout from "@/components/HomePage/HomeAbout/HomeAbout";
import HomeContent from "@/components/HomePage/HomeContent/HomeContent";
// import HomeArtist from "@/components/HomePage/HomeArtist/HomeArtist";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeMap from "@/components/HomePage/HomeMap/HomeMap";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
export const metadata = {
  title: "Beauty Salon in Mangaluru – Hair, Nails, Facial, Waxing & Make-Up",
  description:
    "Beauty Salon in Mangaluru. Whether you are looking for expert haircuts, skin treatments, nail care, or relaxing spa services. Book Now!",
  canonical: "https://twirlsalon.com/",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function HomePage() {
  return (
    <div className="main-container">
      <HomeHeader />
      <HomeService />
      <HomeAbout />
      <HomeTreatments />
      {/* <HomeArtist/> */}
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <HomeMap />
      <HomeContent />
    </div>
  );
}
