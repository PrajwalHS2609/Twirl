import ContactUsAddress from "@/components/ContactUs/ContactUsAddress";
import ContactUsForm from "@/components/ContactUs/ContactUsForm";
import ContactUsHeader from "@/components/ContactUs/ContactUsHeader";
export const metadata = {
  title: "Contact Salon in Mangaluru – Hair, Nails, Facial, Waxing & Make-Up",
  description:
    "Contact Salon Membership in Mangaluru. Whether you are looking for expert haircuts, skin treatments, nail care, or relaxing spa services. Book Now!",
  canonical: "https://twirlsalon.com/contact-us",
  keywords: [
    "Best salon near me",
    "Luxury salon experience",
    "Professional hairstyling",
    "Hair and beauty salon",
  ],
};
export default function ContactUs() {
  return (
    <div className="main-container">
      <ContactUsHeader />
      <ContactUsAddress />
      <ContactUsForm />
    </div>
  );
}
