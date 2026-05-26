import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import HomeYt from "@/components/HomePage/HomeYt/HomeYt";
import ChromeGelPolishContent from "@/components/NailSubServices/ChromeGelPolish/ChromeGelPolishContent";
import ChromeGelPolishHead from "@/components/NailSubServices/ChromeGelPolish/ChromeGelPolishHead";
import ChromeGelPolishHeader from "@/components/NailSubServices/ChromeGelPolish/ChromeGelPolishHeader";
import Reviews from "@/components/Reviews/Reviews";

export const metadata = {
  title: "Chrome Gel Polish Salon in Mangalore| Best Gel Nail Polish Salon Near Me",
  description:
    "Chrome Gel Polish Salon in Mangalore has become a sensational trend in the world of beauty and nail art, offering a bold, reflective, and high-shine finish",
  canonical: "https://twirlsalon.com/chrome-gel-polish-salon-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function ChromeGelPolish() {
  return (
    <div className="main-container">
      <ChromeGelPolishHeader />
      <ChromeGelPolishHead />
      <HomeTreatments />
      <HomeYt />
      <Reviews />
      <HomeInspire />
      <ChromeGelPolishContent />
    </div>
  );
}
