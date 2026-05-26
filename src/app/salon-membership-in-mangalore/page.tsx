import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import SalonMembershipContent from "@/components/SalonMembership/SalonMembershipContent";
import SalonMembershipHead from "@/components/SalonMembership/SalonMembershipHead";
import SalonMembershipPlan from './../../components/SalonMembership/SalonMembershipPlan/SalonMembershipPlan';
import HomeYt from "@/components/HomePage/HomeYt/HomeYt";
import Reviews from "@/components/Reviews/Reviews";
export const metadata = {
  title:
    "Salon Membership in mangalore – Hair, Nails, Facial, Waxing & Make-Up",
  description:
    "Salon Membership in mangalore. Whether you are looking for expert haircuts, skin treatments, nail care, or relaxing spa services. Book Now!",
  canonical: "https://twirlsalon.com/salon-membership-in-mangalore",
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
      <SalonMembershipPlan />
      <SalonMembershipContent />
      <HomeTreatments />
      <HomeYt />
      <Reviews />
      <HomeInspire />
    </div>
  );
}
