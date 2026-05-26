"use client";
import React, { useEffect, useState } from "react";
import "./BookingPopUp.css";
import { HiXMark } from "react-icons/hi2";
import Swal from "sweetalert2";
import PopupImg from "@/media/Images/PopupImg.jpg"
import Image from "next/image";
const BookingPopUp = () => {
  const [isVisible, setIsVisible] = useState(false);

 useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 15000);
  }, []);

  const handleExit = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

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
        {/* LEFT SIDE */}
        <div className="book-left">
          <div className="book-close">
            <HiXMark className="book-itemIco" onClick={handleExit} />
          </div>

          <div className="bookForm-content">
            <span className="book-subtitle">
              LIMITED TIME OFFER
            </span>

            <h2>
              Looking for an <br />
              <span>Appointment?</span>
            </h2>

            <p>
              Leave your message here and we will call you shortly.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="bookForm-item">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
              </div>

              <div className="bookForm-item">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="bookForm-item">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  required
                />
              </div>

              <div className="bookForm-item">
                <select name="service" required>
                  <option value="">Select Service</option>
                  <option value="Hair">Hair</option>
                  <option value="Facial">Facial</option>
                  <option value="Makeup">Makeup</option>
                  <option value="Waxing">Waxing</option>
                  <option value="Nails">Nails</option>
                </select>
              </div>
{/* 
              <div className="bookForm-item">
                <select name="location" required>
                  <option value="">Select Location</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Mysore">Mysore</option>
                  <option value="Hyderabad">Hyderabad</option>
                </select>
              </div> */}

              <div className="bookForm-item">
                <textarea
                  name="message"
                  placeholder="How can we assist you?"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Request Callback
              </button>
            </form>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="book-right">
          <Image
            src={PopupImg}
            alt="Appointment"
     
          />
        </div>
      </div>
    </div>
  );
};

export default BookingPopUp;
