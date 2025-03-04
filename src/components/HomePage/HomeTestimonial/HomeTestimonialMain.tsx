"use client";
import React, { useState } from "react";
import "./HomeTestimonial.css";
import Carousel from "react-bootstrap/Carousel";

const HomeTestimonialMain = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex:number) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="homeTestimonialMain-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="">
          <div className="homeTestimonial-content">
            <img
              src="https://img.freepik.com/free-photo/brunette-man-isolated-white-background_1368-4404.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid"
              alt=""
            />
            <p>
              " The staff is so welcoming, and they really know what they’re
              doing. My haircut was exactly what I wanted, and the service was
              impeccable. "
            </p>
            <h5>John Doe</h5>
          </div>
        </Carousel.Item>
        <Carousel.Item className="">
          <div className="homeTestimonial-content">
            <img
              src="https://img.freepik.com/free-photo/brunette-man-isolated-white-background_1368-4404.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid"
              alt=""
            />
            <p>
              " The staff is so welcoming, and they really know what they’re
              doing. My haircut was exactly what I wanted, and the service was
              impeccable. "
            </p>
            <h5>John Doe</h5>
          </div>
        </Carousel.Item>
        <Carousel.Item className="">
          <div className="homeTestimonial-content">
            <img
              src="https://img.freepik.com/free-photo/brunette-man-isolated-white-background_1368-4404.jpg?uid=R153459844&ga=GA1.1.790794325.1735297516&semt=ais_hybrid"
              alt=""
            />
            <p>
              " The staff is so welcoming, and they really know what they’re
              doing. My haircut was exactly what I wanted, and the service was
              impeccable. "
            </p>
            <h5>John Doe</h5>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default HomeTestimonialMain;
