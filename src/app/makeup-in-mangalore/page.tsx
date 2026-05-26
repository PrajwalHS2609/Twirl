import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import HomeYt from "@/components/HomePage/HomeYt/HomeYt";
import MakeupContent from "@/components/MakeupServices/MakeupContent";
import MakeupServicesCard from "@/components/MakeupServices/MakeupServicesCard";
import MakeupServicesHead from "@/components/MakeupServices/MakeupServicesHead";
import Reviews from "@/components/Reviews/Reviews";
export const metadata = {
  title: "Bridal Makeup in Mangalore | Pre-Bridal Makeup in Mangalore",
  description: "Bridal in Mangalore. Our team of expert makeup artists specializes in crafting customized bridal looks that suit your personality, skin tone, and wedding theme.",
  canonical: "https://twirlsalon.com/makeup-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function Makeup() {
  return (
    <div className="main-container">
      <MakeupServicesHead />
      <MakeupServicesCard />
      <HomeTreatments />
      <HomeYt />
      <Reviews />
<HomeInspire />
      <MakeupContent/>
    </div>
  );
}
