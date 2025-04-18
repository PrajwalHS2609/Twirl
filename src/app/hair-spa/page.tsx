import HairSpaCard from "@/components/HairServices/HairSpa/HairSpaCard";
import HairSpaHead from "@/components/HairServices/HairSpa/HairSpaHead";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";

export default function HaircutSpa() {
  return (
    <div className="main-container">
      <HairSpaHead />
      <HairSpaCard />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
    </div>
  );
}
