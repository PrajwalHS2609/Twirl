import HomeAbout from "@/components/HomePage/HomeAbout/HomeAbout";
// import HomeArtist from "@/components/HomePage/HomeArtist/HomeArtist";
import HomeHeader from "@/components/HomePage/HomeHeader/HomeHeader";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeMap from "@/components/HomePage/HomeMap/HomeMap";
import HomeService from "@/components/HomePage/HomeService/HomeService";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";

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
    </div>
  );
}
