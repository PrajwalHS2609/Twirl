import React from "react";
import "./ContactUs.css";
import { FaPhoneAlt } from "react-icons/fa";

const ContactUsHeader = () => {
  return (
    <div className="contactHeader-container">
      <div className="contactHeader-content">
        <img
          src="https://images.pexels.com/photos/8460603/pexels-photo-8460603.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <div className="contactHeader-content">
        <h6>CONTACT US</h6>
        <h2>Contact Us Easily Online, by Phone or by Dropping In</h2>
        <div className="contactHeader-item">
          <button>BOOK ONLINE</button>
          <div className="contactHeader-call">
            <FaPhoneAlt className="contactHeader-icon" />
            Call: <a href="tel:9972272700">+91 9972272700</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsHeader;
