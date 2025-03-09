import React from "react";
import "./ContactUs.css";
const ContactUsForm = () => {
  return (
    <div className="contactForm-container">
      <div className="contactForm-content">
        <img
          src="https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
      </div>
      <div className="contactForm-content">
        <h3>Ask a Question</h3>
        <p>
          If you have any questions, you can contact us. Please, fill out the
          form below.
        </p>
        <form action="">
          <div className="contactForm-itemWrapper">
            <div className="contactForm-item">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className="contactForm-item">
              <label htmlFor="email">Email</label>{" "}
              <input type="mail" name="email" id="email" />
            </div>
          </div>
          <div className="contactForm-itemWrapper">
            <label htmlFor="">Your Message</label>
            <textarea name="" id=""></textarea>
          </div>
          <div className="contactForm-itemWrapper">
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
