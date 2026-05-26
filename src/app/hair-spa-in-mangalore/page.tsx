import HairSpaCard from "@/components/HairServices/HairSpa/HairSpaCard";
import HairSpaContent from "@/components/HairServices/HairSpa/HairSpaContent";
import HairSpaHead from "@/components/HairServices/HairSpa/HairSpaHead";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import HomeYt from "@/components/HomePage/HomeYt/HomeYt";
import Reviews from "@/components/Reviews/Reviews";
export const metadata = {
  title: "Hair Spa Salon in Mangalore for Men & Women | Luxury Spa near me",
  description:
    "Hair Spa Salon in Mangalore for Men & Women is a nourishing treatment that revitalizes your hair, leaving it soft, smooth, and deeply hydrated.",
  canonical: "https://twirlsalon.com/hair-spa-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function HaircutSpa() {
  return (
    <div className="main-container">
      <HairSpaHead />
      <HairSpaCard />
      <HomeTreatments />
      <HomeYt />
      <Reviews />      
      <HomeInspire />
      <HairSpaContent/>
    </div>
  );
}
