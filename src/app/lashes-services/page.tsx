import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import LashesServiceHead from "@/components/LashesServices/LashesServiceHead";
import LashesServiceCard from "./../../components/LashesServices/LashesServiceCard";
import HomeYt from "@/components/HomePage/HomeYt/HomeYt";
import Reviews from "@/components/Reviews/Reviews";

export default function Lashes() {
  return (
    <div className="main-container">
      <LashesServiceHead />
      <LashesServiceCard />
      <HomeTreatments />
      <HomeYt />
      <Reviews />
      <HomeInspire />
    </div>
  );
}
