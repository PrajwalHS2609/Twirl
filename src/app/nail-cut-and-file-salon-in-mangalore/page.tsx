import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import CutAndFileContent from "@/components/NailSubServices/CutAndFile/CutAndFileContent";
import CutAndFileHead from "@/components/NailSubServices/CutAndFile/CutAndFileHead";
import CutAndFileHeader from "@/components/NailSubServices/CutAndFile/CutAndFileHeader";
export const metadata = {
  title: "Nail Cut & File Salon in Mangalore | Nail Cut & File Salon Near Me",
  description:
    "Nail Cut & File Salon in Mangalore, we take pride in offering meticulous nail grooming services that enhance your appearance and maintain the health of your nails.",
  canonical: "https://twirlsalon.com/nail-cut-and-file-salon-in-mangalore",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function ClassicMaincure() {
  return (
    <div className="main-container">
      <CutAndFileHeader />
      <CutAndFileHead />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
      <CutAndFileContent />
    </div>
  );
}
