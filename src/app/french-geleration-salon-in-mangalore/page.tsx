import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import HomeYt from "@/components/HomePage/HomeYt/HomeYt";
import FrenchGelerationContent from "@/components/NailSubServices/FrenchGeleration/FrenchGelerationContent";
import FrenchGelerationHead from "@/components/NailSubServices/FrenchGeleration/FrenchGelerationHead";
import FrenchGelerationHeader from "@/components/NailSubServices/FrenchGeleration/FrenchGelerationHeader";
import Reviews from "@/components/Reviews/Reviews";
export const metadata = {
  title: "French Geleration Salon in Mangalore | Best Nail Salon Near Me",
  description:
    "French Geleration Salon in Mangalore, is a popular choice for those who appreciate clean, natural-looking nails enhanced by a soft pink or nude base and iconic white tips, all sealed with a high-shine gel finish. ",
  canonical: "https://twirlsalon.com/french-geleration-salon-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function FrenchGeleration() {
  return (
    <div className="main-container">
      <FrenchGelerationHeader />
      <FrenchGelerationHead />
      <HomeTreatments />
      <HomeYt />
      <Reviews />
      <HomeInspire />
      <FrenchGelerationContent />
    </div>
  );
}
