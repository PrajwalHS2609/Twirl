import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import SalonMembershipContent from "@/components/SalonMembership/SalonMembershipContent";
import SalonMembershipHead from "@/components/SalonMembership/SalonMembershipHead";
export const metadata = {
  title:
    "Salon Membership in Mangaluru – Hair, Nails, Facial, Waxing & Make-Up",
  description:
    "Salon Membership in Mangaluru. Whether you are looking for expert haircuts, skin treatments, nail care, or relaxing spa services. Book Now!",
  canonical: "https://twirlsalon.com/salon-membership-in-mangaluru",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function SalonMembership() {
  return (
    <div className="main-container">
      <SalonMembershipHead />
      <SalonMembershipContent />
      <HomeTreatments />
      <HomeInterior />
      <HomeTestimonial />
      <HomeInspire />
    </div>
  );
}
