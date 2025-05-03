import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import ChromeGelPolishContent from "@/components/NailSubServices/ChromeGelPolish/ChromeGelPolishContent";
import ChromeGelPolishHead from "@/components/NailSubServices/ChromeGelPolish/ChromeGelPolishHead";
import ChromeGelPolishHeader from "@/components/NailSubServices/ChromeGelPolish/ChromeGelPolishHeader";

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
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <ChromeGelPolishContent />
    </div>
  );
}
