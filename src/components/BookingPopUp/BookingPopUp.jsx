"use client";
import React, { useState } from "react";
import "./BookingPopUp.css";
import { HiXMark } from "react-icons/hi2";
import Swal from "sweetalert2";

const BookingPopUp = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleExit = (e) => {
    e.preventDefault();
    document.querySelector(".book-container").style.visibility = "hidden";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", "8e0df4af-e877-4d7e-9dea-8d70c89b1c4c");

    // ✅ Collect selected checkboxes correctly
    const selectedServices = Array.from(
      form.querySelectorAll('input[name="Service"]:checked')
    ).map((input) => input.value);

    // ✅ Remove existing Service fields & store correctly
    formData.delete("Service");
    formData.append("Service", selectedServices.join(", ")); // Store as comma-separated string

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
      form.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again later.",
        icon: "error",
      });
    }
  };

  // if (!isVisible) return null;

  return (
    <div className="book-container">
      <div className="book-content">
        <div className="book-item">
          <HiXMark className="book-itemIco" onClick={handleExit} />
        </div>
        <div className="book-item">
          <div className="bookForm-content">
            <h3>Book Your Appointment</h3>
            <form onSubmit={handleSubmit}>
              <div className="bookForm-itemWrapper">
                <div className="bookForm-item">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="bookForm-item">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" required />
                </div>
              </div>

              <div className="bookForm-itemWrapper">
                <div className="bookForm-item">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" name="phone" id="phone" required />
                </div>
                <div className="bookForm-item">
                  <label>Services</label>
                  <div className="radio-group">
                    <label>
                      <input type="checkbox" name="Service" value="Hair" /> Hair
                    </label>
                    <label>
                      <input type="checkbox" name="Service" value="Nails" /> Nails
                    </label>
                    <label>
                      <input type="checkbox" name="Service" value="Facial" /> Facial
                    </label>
                    <label>
                      <input type="checkbox" name="Service" value="Waxing" /> Waxing
                    </label>
                    <label>
                      <input type="checkbox" name="Service" value="Makeup" /> Makeup
                    </label>
                  </div>
                </div>
              </div>

              <div className="bookForm-itemWrapper">
                <label htmlFor="message">Your Message</label>
                <textarea name="message" id="message" required></textarea>
              </div>

              <div className="bookForm-itemWrapper">
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPopUp;
