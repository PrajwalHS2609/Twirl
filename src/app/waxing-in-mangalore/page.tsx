import BeautyEssentialServicesCard from "@/components/BeautyEssentialServices/BeautyEssentialServicesCard";
import BeautyEssentialServicesHead from "@/components/BeautyEssentialServices/BeautyEssentialServicesHead";
import WaxingContent from "@/components/BeautyEssentialServices/WaxingContent";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import HomeYt from "@/components/HomePage/HomeYt/HomeYt";
import Reviews from "@/components/Reviews/Reviews";
export const metadata = {
  title: "Waxing in Mangalore | Body Waxing in Mangalore",
  description:
    "Waxing in Mangalore. At Twirl Salon, we specialize in offering high-quality waxing services that leave your skin soft, hair-free, and glowing. Book Now!",
  canonical: "https://twirlsalon.com/waxing-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function BeautyEssentials() {
  return (
    <div className="main-container">
      <BeautyEssentialServicesHead />
      <BeautyEssentialServicesCard />
      <HomeTreatments />
      <HomeYt />
      <Reviews />
      <HomeInspire />
      <WaxingContent />
    </div>
  );
}
