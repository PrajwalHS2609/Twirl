import HomeInspire from "@/components/HomePage/HomeInspire/HomeInspire";
import HomeInterior from "@/components/HomePage/HomeInterior/HomeInterior";
import HomeTestimonial from "@/components/HomePage/HomeTestimonial/HomeTestimonial";
import HomeTreatments from "@/components/HomePage/HomeTreatments/HomeTreatments";
import SalonMembershipContent from "@/components/SalonMembership/SalonMembershipContent";
import SalonMembershipHead from "@/components/SalonMembership/SalonMembershipHead";

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
