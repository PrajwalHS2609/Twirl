"use client"
import React from "react";
import "./BookingPopUp.css";
import { HiXMark } from "react-icons/hi2";

const BookingPopUp = () => {
  const handleExit = (e) => {
    e.preventDefault();
    document.querySelector(".book-container").style.visibility = "hidden";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("booking Success!");
  };
  return (
    <div className="book-container">
      <div className="book-content">
        <div className="book-item">
          <HiXMark className="book-itemIco" onClick={handleExit} />
        </div>
        <div className="book-item">
          <div className="bookForm-content">
            <h3>Ask a Question</h3>
            <p>
              If you have any questions, you can contact us. Please, fill out
              the form below.
            </p>
            <form action="">
              <div className="bookForm-itemWrapper">
                <div className="bookForm-item">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" />
                </div>
                <div className="bookForm-item">
                  <label htmlFor="email">Email</label>{" "}
                  <input type="mail" name="email" id="email" />
                </div>
              </div>
              <div className="bookForm-itemWrapper">
                <label htmlFor="">Your Message</label>
                <textarea name="" id=""></textarea>
              </div>
              <div className="bookForm-itemWrapper">
                <button
                  type="submit"
                  className="submit-btn"
                  onClick={handleSubmit}
                >
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
