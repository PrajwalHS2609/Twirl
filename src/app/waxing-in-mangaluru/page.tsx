import BeautyEssentialServicesCard from "@/components/BeautyEssentialServices/BeautyEssentialServicesCard";
import BeautyEssentialServicesHead from "@/components/BeautyEssentialServices/BeautyEssentialServicesHead";
import WaxingContent from "@/components/BeautyEssentialServices/WaxingContent";
import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
export const metadata = {
  title: "Waxing in Mangaluru | Body Waxing in Mangaluru",
  description:
    "Waxing in Mangaluru. At Twirl Salon, we specialize in offering high-quality waxing services that leave your skin soft, hair-free, and glowing. Book Now!",
  canonical: "https://twirlsalon.com/waxing-in-mangaluru",
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
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <WaxingContent />
    </div>
  );
}
