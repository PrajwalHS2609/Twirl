import ContactUsAddress from "@/components/ContactUs/ContactUsAddress";
import ContactUsForm from "@/components/ContactUs/ContactUsForm";
import ContactUsHeader from "@/components/ContactUs/ContactUsHeader";
export default function ContactUs() {
  return (
    <div className="main-container">
      <ContactUsHeader />
      <ContactUsAddress />
      <ContactUsForm />
    </div>
  );
}
