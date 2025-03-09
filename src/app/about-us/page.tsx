import AboutUsHeader from "@/components/AboutUs/AboutUsHeader";
import AboutUsMain from "@/components/AboutUs/AboutUsMain";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";

export default function AboutUs(){
  return(
    <div className="main-container">
      <AboutUsHeader/>
      <AboutUsMain/>
      <HomeInterior />
      <HomeTestimonial />
    </div>
  )
}