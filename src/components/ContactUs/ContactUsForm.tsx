"use client";
import React from "react";
import "./ContactUs.css";
import Swal from "sweetalert2";

const ContactUsForm = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget); // ✅ Correctly typed

    formData.append("access_key", "8e0df4af-e877-4d7e-9dea-8d70c89b1c4c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Mail Sent successfully",
        icon: "success",
      });
      event.currentTarget.reset(); // ✅ Fix: Use currentTarget instead of event.target
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again later.",
        icon: "error",
      });
    }
  };

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
        <form action="" onSubmit={onSubmit}>
          <div className="contactForm-itemWrapper">
            <div className="contactForm-item">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="contactForm-item">
              <label htmlFor="email">Email</label>{" "}
              <input type="mail" name="email" id="email" />
            </div>
          </div>
          <div className="contactForm-itemWrapper">
            <div className="contactForm-item">
              <label htmlFor="Phone">Phone</label>{" "}
              <input type="phone" name="phone" id="email" />
            </div>
          </div>
          <div className="contactForm-itemWrapper">
            <label htmlFor="message">Your Message</label>
            <textarea name="message" id="message"></textarea>
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
