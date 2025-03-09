import AboutUsHeader from "@/components/AboutUs/AboutUsHeader";
import AboutUsMain from "@/components/AboutUs/AboutUsMain";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";

export default function AboutUs(){
  return(
    <div className="main-container">
      <AboutUsHeader/>
      <AboutUsMain/>
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
    </div>
  )
}