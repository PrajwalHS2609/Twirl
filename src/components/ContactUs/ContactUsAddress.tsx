import React from "react";
import HomeMap from "../HomePage/HomeMap/HomeMap";

const ContactUsAddress = () => {
  return (
    <div className="contactAddress-container">
      <div className="contactAddress-content">
        <h2>Contact Information</h2>
        <p>
          Thank you for visiting our website. We are here to assist you with any
          inquiries you may have.
        </p>
        <div className="contactAddress-itemWrapper">
          <div className="contactAddress-item">
            <h4>ADDRESS</h4>
            <a href="https://www.google.com/maps/place/Twirl+Lifestyle+%7C+HAIR+%26+BEAUTY+SALON/@12.8857261,74.8428603,808m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3ba35b8ceb3f1c37:0x2ad8a35b91863b11!8m2!3d12.8857261!4d74.8454352!16s%2Fg%2F11x2psm6my?hl=en-IN&entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D">
              1st floor, KG commercial complex, Pais Garden, opp. Inland
              Business Park, Bejai, mangalore, Karnataka 575004{" "}
            </a>
          </div>
          <div className="contactAddress-item">
            <h4>MAIL US AT</h4>
            <a href="mailto:booking@twirlsalon.com">booking@twirlsalon.com</a>
          </div>
        </div>
      </div>
      <div className="contactAddress-content">
        <HomeMap/>
      </div>
    </div>
  );
};

export default ContactUsAddress;
